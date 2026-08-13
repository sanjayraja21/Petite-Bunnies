const products = [
  {
    id: 1,
    name: 'White Bunny',
    category: 'Rabbit',
    breed: 'White Bunny',
    availability: 'Available',
    image: '/images/bunny/bunny.jpg',
    imagePosition: 'center 45%',
  },
  {
    id: 2,
    name: 'Baby Chick',
    category: 'Chick',
    breed: 'Baby Chick',
    availability: 'Available',
    image: '/images/chicks/chicks.jpg',
    imagePosition: 'center center',
  },
  {
    id: 3,
    name: 'Country Hen',
    category: 'Hen',
    breed: 'Country Hen',
    availability: 'Available',
    image: '/images/hens/hen.jpg',
    imagePosition: 'center 50%',
  },
];

function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">

      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Shop
          </p>

          <h1 className="text-3xl font-semibold text-stone-800">
            Choose your favorite companion
          </h1>
        </div>

        <div className="rounded-full bg-white/80 px-4 py-2 text-sm text-stone-600 shadow-sm">
          Showing {products.length} premium animals
        </div>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/90 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="aspect-[4/3] w-full overflow-hidden bg-white">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                style={{
                  objectPosition: product.imagePosition,
                }}
              />

            </div>

            <div className="p-5">

              <p className="text-sm font-medium text-rose-600">
                {product.category}
              </p>

              <h3 className="mt-1 text-lg font-semibold text-stone-800">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-stone-600">
                {product.breed}
              </p>

              <div className="mt-4">
                <p className="font-semibold text-moss-600">
                  {product.availability}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ShopPage;