create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  password text not null,
  role text default 'customer',
  created_at timestamptz default now()
);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone_number text not null,
  email text not null,
  address text not null,
  city text not null,
  district text not null,
  state text not null,
  country text not null,
  pincode text not null,
  registration_date timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  product_name text not null,
  category text not null,
  breed text not null,
  description text not null,
  age text not null,
  gender text not null,
  weight text not null,
  price numeric not null,
  stock_quantity integer not null,
  vaccination_status text not null,
  image text,
  created_date timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  product_id uuid references products(id),
  quantity integer not null,
  total_amount numeric not null,
  payment_method text not null,
  order_status text default 'Pending',
  order_date timestamptz default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id),
  product_id uuid references products(id),
  quantity integer not null,
  price numeric not null
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  product_id uuid references products(id),
  rating integer not null,
  comment text
);

create table if not exists wishlist (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  product_id uuid references products(id)
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);
