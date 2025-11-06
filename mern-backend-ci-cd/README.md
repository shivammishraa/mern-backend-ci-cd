# MERN Backend CI/CD (GitHub Actions → Docker Hub)

Minimal Express API with a GitHub Actions pipeline that runs tests and, on success, builds and pushes a Docker image to Docker Hub.

## Endpoints
- `GET /api/health` → `{ "status": "ok" }`
- `GET /` → `"Hello from MERN backend CI/CD demo!"`

## Local Dev
```bash
npm ci
npm run dev
# open http://localhost:3000/api/health
```
