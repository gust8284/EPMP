from typing import Any

from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str
    app: str
    version: str


class CountryListItem(BaseModel):
    slug: str
    name: str
    readiness: str | None = None
    sections: list[str] = Field(default_factory=list)


class NewsItem(BaseModel):
    title: str
    source: str
    published: str | None = None
    summary: str | None = None
    link: str | None = None


class BlocNewsResponse(BaseModel):
    bloc: str
    count: int
    fetched_from_cache: bool
    items: list[NewsItem]


class GenericPayload(BaseModel):
    data: dict[str, Any]
