from fastapi import APIRouter, HTTPException, Query

from app.models.schemas import BlocNewsResponse, GenericPayload
from app.services.data_service import DataService
from app.services.rss_service import RSSService

router = APIRouter(prefix='/api/blocs', tags=['blocs'])


@router.get('')
def list_blocs() -> list[dict]:
    return DataService.list_blocs()


@router.get('/{slug}', response_model=GenericPayload)
def get_bloc(slug: str) -> dict:
    payload = DataService.get_bloc(slug)
    if payload is None:
        raise HTTPException(status_code=404, detail='Bloc not found')
    return {'data': payload}


@router.get('/{slug}/news', response_model=BlocNewsResponse)
def get_bloc_news(slug: str, limit: int = Query(default=8, ge=1, le=20)) -> dict:
    if DataService.get_bloc(slug) is None:
        raise HTTPException(status_code=404, detail='Bloc not found')

    items, from_cache = RSSService.get_bloc_news(slug, limit=limit)
    return {
        'bloc': slug,
        'count': len(items),
        'fetched_from_cache': from_cache,
        'items': items,
    }
