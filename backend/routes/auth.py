from fastapi import APIRouter, HTTPException, status
from backend.models.schemas import RegisterRequest, LoginRequest
from backend.auth.jwt_utils import create_access_token, hash_password, verify_password
from backend.database import supabase

router = APIRouter(prefix='/api', tags=['auth'])


@router.post('/register', status_code=status.HTTP_201_CREATED)
def register(payload: RegisterRequest):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured. Please set environment variables.')

    user_payload = {
        'full_name': payload.full_name,
        'email': str(payload.email),
        'password': hash_password(payload.password),
        'role': payload.role,
    }
    response = supabase.table('users').insert(user_payload).execute()
    return {'message': 'Registered successfully', 'user': response.data}


@router.post('/login')
def login(payload: LoginRequest):
    if not supabase:
        raise HTTPException(status_code=503, detail='Supabase not configured. Please set environment variables.')

    response = supabase.table('users').select('*').eq('email', str(payload.email)).execute()
    if not response.data:
        raise HTTPException(status_code=401, detail='Invalid credentials')

    user = response.data[0]
    if not verify_password(payload.password, user['password']):
        raise HTTPException(status_code=401, detail='Invalid credentials')

    token = create_access_token({'sub': user['email'], 'role': user.get('role', 'customer')})
    return {'access_token': token, 'token_type': 'bearer'}


@router.post('/logout')
def logout():
    return {'message': 'Logged out'}
