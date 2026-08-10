from fastapi import APIRouter, HTTPException, status
from backend.models.schemas import CustomerCreate
from backend.database import supabase

router = APIRouter(prefix='/api/customers', tags=['customers'])


@router.post('', status_code=status.HTTP_201_CREATED)
def create_customer(payload: CustomerCreate):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('customers').insert(payload.dict()).execute()
    return {'message': 'Customer saved', 'customer': response.data}


@router.get('')
def get_customers():
    if not supabase:
        return []
    response = supabase.table('customers').select('*').execute()
    return response.data
