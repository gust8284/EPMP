# EPMP Backend V1

Minimal FastAPI backend for the EPMP school project.

## Why this setup

- fully free
- simple enough for a school project
- easy to explain during a presentation
- separates frontend rendering from data and news fetching

## Included features

- `GET /api/health`
- `GET /api/countries`
- `GET /api/countries/{slug}`
- `GET /api/blocs`
- `GET /api/blocs/{slug}`
- `GET /api/blocs/{slug}/news`
- RSS-based news fetching with in-memory caching
- bundled fallback news if RSS fetching fails

## Start locally

### 1. Create a virtual environment

```bash
python -m venv .venv
```

### 2. Activate it

#### Windows PowerShell

```powershell
.\.venv\Scripts\Activate.ps1
```

#### Windows Command Prompt

```bat
.\.venv\Scriptsctivate.bat
```

### 3. Install dependencies

```bash
py -m pip install -r requirements.txt
```

### 4. Run the server

```bash
py -m uvicorn app.main:app --reload
```

The backend will run on:

```text
http://127.0.0.1:8000
```

The built-in API docs will be available at:

```text
http://127.0.0.1:8000/docs
```

## Recommended first frontend integration

Do not migrate everything at once.

Start by fetching:

- one country from `/api/countries/sweden`
- one bloc news feed from `/api/blocs/eu/news`

Once that works, move more frontend data over gradually.


## Public hosting later

This backend is ready for a free Render deployment. The full project root also includes `render.yaml` and `DEPLOY_GUIDE.md` for the recommended free hosting path.


## CORS

By default, the backend only allows common local development origins. For public deployment, set `CORS_ALLOWED_ORIGINS` to your frontend URL.
