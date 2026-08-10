from pydantic import BaseModel, EmailStr

class RegisterRequest(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    role: str = 'customer'

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class ProductCreate(BaseModel):
    product_name: str
    category: str
    breed: str
    description: str
    image_url: str
    availability: str = 'Available'

class CustomerCreate(BaseModel):
    full_name: str
    phone: str
    email: EmailStr
    address: str
    city: str
    district: str
    state: str
    country: str
    pincode: str

class OrderCreate(BaseModel):
    customer_id: str
    animal_id: str
    quantity: int = 1
    booking_date: str
    order_status: str = 'Pending'
