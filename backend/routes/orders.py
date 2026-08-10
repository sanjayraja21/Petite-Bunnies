from fastapi import APIRouter, HTTPException, status
from backend.models.schemas import OrderCreate
from backend.database import supabase

router = APIRouter(prefix='/api/orders', tags=['orders'])


@router.post('', status_code=status.HTTP_201_CREATED)
def create_order(payload: OrderCreate):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('orders').insert(payload.dict()).execute()
    return {'message': 'Booking request received', 'order': response.data}


@router.get('')
def list_orders():
    if not supabase:
        return []
    response = supabase.table('orders').select('*').execute()
    return response.data


@router.put('/status')
def update_order_status(order_id: str, status: str):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured')
    response = supabase.table('orders').update({'order_status': status}).eq('id', order_id).execute()
    return {'message': 'Order status updated', 'order': response.data}
