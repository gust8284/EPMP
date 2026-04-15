from pathlib import Path
import os


APP_TITLE = 'EPMP Backend'
APP_VERSION = '0.1.0'
CACHE_TTL_SECONDS = 15 * 60

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / 'data'
COUNTRIES_DIR = DATA_DIR / 'countries'
BLOCS_DIR = DATA_DIR / 'blocs'
NEWS_FALLBACK_DIR = DATA_DIR / 'news_fallback'

BLOC_FEEDS = {
    'eu': [
        'https://news.google.com/rss/search?q=European+Union+OR+EU+when:7d&hl=en-GB&gl=GB&ceid=GB:en',
        'https://feeds.bbci.co.uk/news/world/europe/rss.xml',
    ],
    'nato': [
        'https://news.google.com/rss/search?q=NATO+when:7d&hl=en-GB&gl=GB&ceid=GB:en',
        'https://feeds.bbci.co.uk/news/world/europe/rss.xml',
    ],
}

def get_allowed_origins() -> list[str]:
    raw = os.getenv(
        'CORS_ALLOWED_ORIGINS',
        'http://127.0.0.1:5500,http://localhost:5500,http://127.0.0.1:8000,http://localhost:8000'
    ).strip()
    if not raw:
        return []
    return [item.strip() for item in raw.split(',') if item.strip()]
