# Petite Bunnies

A professional e-commerce storefront for rabbits, chicks, and hens built with React + Vite, Tailwind CSS, and a Python FastAPI backend.

## Features
- Premium storefront experience with home, shop, categories, cart, checkout, auth, dashboard, and admin sections
- FastAPI backend with Supabase-ready routes for auth, products, customers, and orders
- Responsive design with soft pink, white, light brown, and green styling

## Local Development
### Frontend
```bash
npm install
npm run dev
```
Open: http://localhost:5173/

### Backend
```bash
pip install -r requirements.txt
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8001
```
Open API: http://localhost:8001/

## Environment Variables
Create a .env file with:
```env
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-service-role-key
SECRET_KEY=your-secret-key
```

## Deployment
- Frontend: Vercel or Netlify
- Backend: Render or Railway
- Database: Supabase PostgreSQL

## Production Notes
- Set strong environment variables for Supabase and JWT secrets before deployment.
- Keep the frontend API base URL configurable through an environment variable such as VITE_API_URL.
- Use HTTPS and enable CORS only for trusted frontend origins.
