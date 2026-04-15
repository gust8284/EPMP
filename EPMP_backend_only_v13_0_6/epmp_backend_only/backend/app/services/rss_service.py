from __future__ import annotations

import json
import re
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from html import unescape
from typing import Any

from app.config import BLOC_FEEDS, CACHE_TTL_SECONDS, NEWS_FALLBACK_DIR

_TAG_RE = re.compile(r'<[^>]+>')
_CACHE: dict[str, dict[str, Any]] = {}


class RSSService:
    @staticmethod
    def _clean_text(value: str | None) -> str:
        if not value:
            return ''
        value = unescape(value)
        value = _TAG_RE.sub('', value)
        return ' '.join(value.split())

    @staticmethod
    def _fetch_url(url: str, timeout: int = 8) -> bytes:
        request = urllib.request.Request(
            url,
            headers={
                'User-Agent': 'EPMP-School-Project/1.0 (+local backend)'
            },
        )
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return response.read()

    @staticmethod
    def _parse_feed(raw_xml: bytes) -> list[dict[str, Any]]:
        root = ET.fromstring(raw_xml)
        items: list[dict[str, Any]] = []

        channel = root.find('channel')
        if channel is not None:
            for node in channel.findall('item'):
                items.append({
                    'title': RSSService._clean_text(node.findtext('title')),
                    'source': RSSService._clean_text(node.findtext('source')) or RSSService._clean_text(channel.findtext('title')) or 'RSS feed',
                    'published': RSSService._clean_text(node.findtext('pubDate')) or None,
                    'summary': RSSService._clean_text(node.findtext('description')) or None,
                    'link': RSSService._clean_text(node.findtext('link')) or None,
                })
            return items

        namespace = {'atom': 'http://www.w3.org/2005/Atom'}
        for node in root.findall('atom:entry', namespace):
            link = None
            link_node = node.find('atom:link', namespace)
            if link_node is not None:
                link = link_node.attrib.get('href')
            source_title = 'RSS feed'
            source = node.find('atom:source', namespace)
            if source is not None:
                source_title = RSSService._clean_text(source.findtext('atom:title', default='', namespaces=namespace)) or source_title
            items.append({
                'title': RSSService._clean_text(node.findtext('atom:title', default='', namespaces=namespace)),
                'source': source_title,
                'published': RSSService._clean_text(node.findtext('atom:updated', default='', namespaces=namespace)) or None,
                'summary': RSSService._clean_text(node.findtext('atom:summary', default='', namespaces=namespace)) or None,
                'link': RSSService._clean_text(link) or None,
            })
        return items

    @staticmethod
    def _dedupe(items: list[dict[str, Any]]) -> list[dict[str, Any]]:
        seen: set[tuple[str, str]] = set()
        unique: list[dict[str, Any]] = []
        for item in items:
            key = ((item.get('title') or '').lower(), (item.get('link') or '').lower())
            if key in seen:
                continue
            seen.add(key)
            unique.append(item)
        return unique

    @staticmethod
    def _load_fallback(bloc_slug: str) -> list[dict[str, Any]]:
        path = NEWS_FALLBACK_DIR / f'{bloc_slug}.json'
        if not path.exists():
            return []
        with path.open('r', encoding='utf-8') as handle:
            payload = json.load(handle)
        return payload.get('items', [])

    @staticmethod
    def get_bloc_news(bloc_slug: str, limit: int = 8) -> tuple[list[dict[str, Any]], bool]:
        now = time.time()
        cached = _CACHE.get(bloc_slug)
        if cached and now - cached['timestamp'] < CACHE_TTL_SECONDS:
            return cached['items'][:limit], True

        urls = BLOC_FEEDS.get(bloc_slug, [])
        combined: list[dict[str, Any]] = []

        for url in urls:
            try:
                raw_xml = RSSService._fetch_url(url)
                combined.extend(RSSService._parse_feed(raw_xml))
            except (urllib.error.URLError, TimeoutError, ET.ParseError, ValueError):
                continue

        combined = [item for item in combined if item.get('title')]
        combined = RSSService._dedupe(combined)

        if not combined:
            combined = RSSService._load_fallback(bloc_slug)

        combined = combined[:limit]
        _CACHE[bloc_slug] = {
            'timestamp': now,
            'items': combined,
        }
        return combined, False
