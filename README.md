# Interview-AI

## Run locally

From the project root, install all workspace dependencies once and start both
servers with one command:

```sh
npm install
npm run dev
```

The frontend is served by Vite (usually at `http://localhost:5173`) and the
backend API listens on port `8080`. Keep this command running while using the
app; press `Ctrl+C` to stop both servers.

The backend reads `PORT` and `MONGODB_URL` from `backend/.env` and serves the
API on port `8080` by default. The Firebase web app configuration must also be
set in `frontend/.env` as `VITE_FIREBASE_APIKEY`.