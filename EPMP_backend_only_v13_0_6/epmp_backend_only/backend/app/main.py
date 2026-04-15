from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import APP_TITLE, APP_VERSION, get_allowed_origins
from app.models.schemas import HealthResponse
from app.routes.blocs import router as blocs_router
from app.routes.countries import router as countries_router

app = FastAPI(title=APP_TITLE, version=APP_VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=False,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/api/health', response_model=HealthResponse, tags=['system'])
def health() -> dict:
    return {
        'status': 'ok',
        'app': APP_TITLE,
        'version': APP_VERSION,
    }


app.include_router(countries_router)
app.include_router(blocs_router)
