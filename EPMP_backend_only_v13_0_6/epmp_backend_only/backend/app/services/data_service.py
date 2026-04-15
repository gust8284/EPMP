from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from app.config import BLOCS_DIR, COUNTRIES_DIR


class DataService:
    @staticmethod
    def _read_json(path: Path) -> dict[str, Any]:
        with path.open('r', encoding='utf-8') as handle:
            return json.load(handle)

    @staticmethod
    def list_countries() -> list[dict[str, Any]]:
        countries: list[dict[str, Any]] = []
        for path in sorted(COUNTRIES_DIR.glob('*.json')):
            payload = DataService._read_json(path)
            countries.append({
                'slug': payload.get('slug', path.stem),
                'name': payload.get('name', path.stem.replace('-', ' ').title()),
                'readiness': payload.get('meta', {}).get('readiness'),
                'sections': payload.get('meta', {}).get('sections', []),
            })
        return countries

    @staticmethod
    def get_country(slug: str) -> dict[str, Any] | None:
        path = COUNTRIES_DIR / f'{slug}.json'
        if not path.exists():
            return None
        return DataService._read_json(path)

    @staticmethod
    def list_blocs() -> list[dict[str, Any]]:
        blocs: list[dict[str, Any]] = []
        for path in sorted(BLOCS_DIR.glob('*.json')):
            payload = DataService._read_json(path)
            blocs.append({
                'slug': payload.get('slug', path.stem),
                'name': payload.get('name', path.stem.upper()),
            })
        return blocs

    @staticmethod
    def get_bloc(slug: str) -> dict[str, Any] | None:
        path = BLOCS_DIR / f'{slug}.json'
        if not path.exists():
            return None
        return DataService._read_json(path)
