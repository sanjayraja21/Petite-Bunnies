from fastapi import APIRouter, HTTPException, status
from backend.models.schemas import ProductCreate
from backend.database import supabase

router = APIRouter(prefix='/api/products', tags=['products'])


@router.get('', status_code=status.HTTP_200_OK)
def list_products():
    if not supabase:
        return []
    response = supabase.table('products').select('*').execute()
    return response.data


@router.get('/{product_id}')
def get_product(product_id: str):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('products').select('*').eq('id', product_id).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail='Product not found')
    return response.data[0]


@router.post('', status_code=status.HTTP_201_CREATED)
def create_product(payload: ProductCreate):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('products').insert(payload.dict()).execute()
    return {'message': 'Product created', 'product': response.data}


@router.put('/{product_id}')
def update_product(product_id: str, payload: ProductCreate):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('products').update(payload.dict()).eq('id', product_id).execute()
    return {'message': 'Product updated', 'product': response.data}


@router.delete('/{product_id}')
def delete_product(product_id: str):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('products').delete().eq('id', product_id).execute()
    return {'message': 'Product deleted', 'product': response.data}
