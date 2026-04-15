from fastapi import APIRouter, HTTPException

from app.models.schemas import CountryListItem, GenericPayload
from app.services.data_service import DataService

router = APIRouter(prefix='/api/countries', tags=['countries'])


@router.get('', response_model=list[CountryListItem])
def list_countries() -> list[dict]:
    return DataService.list_countries()


@router.get('/{slug}', response_model=GenericPayload)
def get_country(slug: str) -> dict:
    payload = DataService.get_country(slug)
    if payload is None:
        raise HTTPException(status_code=404, detail='Country not found')
    return {'data': payload}
