const products = [
  { id: 1, name: 'White Bunny', category: 'Rabbit', breed: 'White Bunny', availability: 'Available', image: '/images/bunny/bunny.jpg' },
  { id: 2, name: 'Baby Chick', category: 'Chick', breed: 'Baby Chick', availability: 'Available', image: '/images/chicks/chicks.jpg' },
  { id: 3, name: 'Country Hen', category: 'Hen', breed: 'Country Hen', availability: 'Available', image: '/images/hens/hen.jpg' },
];

function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Shop</p>
          <h1 className="text-3xl font-semibold text-stone-800">Choose your favorite companion</h1>
        </div>
        <div className="rounded-full bg-white/80 px-4 py-2 text-sm text-stone-600 shadow-sm">Showing {products.length} premium animals</div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/80 shadow-md">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            <div className="p-5">
              <p className="text-sm text-rose-600">{product.category}</p>
              <h3 className="mt-1 text-lg font-semibold text-stone-800">{product.name}</h3>
              <p className="mt-2 text-sm text-stone-600">{product.breed}</p>
              <div className="mt-4 space-y-1 text-sm text-stone-600">
                <p className="font-semibold text-moss-600">{product.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
