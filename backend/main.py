import os
import sys
from pathlib import Path
from typing import List

if __package__ in {None, ''}:
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from backend.routes import auth, products, customers, orders

load_dotenv()

app = FastAPI(
    title='Petite Bunnies API',
    version='1.0.0',
    description='Production-ready API for the Petite Bunnies storefront.',
)

origins = os.getenv('ALLOWED_ORIGINS', 'http://localhost:5173,http://127.0.0.1:5173').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in origins if origin.strip()],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(customers.router)
app.include_router(orders.router)


@app.get('/')
def root() -> dict[str, str]:
    return {'message': 'Petite Bunnies API is running'}


@app.get('/health')
def health() -> dict[str, str]:
    return {'status': 'ok'}
