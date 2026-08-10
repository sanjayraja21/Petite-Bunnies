const categories = [
  { name: 'Rabbits', items: ['Baby Bunny', 'White Bunny', 'Brown Bunny', 'Black Bunny', 'Lionhead Rabbit', 'Mini Lop', 'Dutch Rabbit', 'Angora Rabbit'] },
  { name: 'Chicks', items: ['Country Chick', 'Layer Chick', 'Broiler Chick'] },
  { name: 'Hens', items: ['Country Hen', 'Farm Hen', 'Layer Hen'] },
];

function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Categories</p>
        <h1 className="text-3xl font-semibold text-stone-800">Browse by animal type</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.name} className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
            <h2 className="text-xl font-semibold text-stone-800">{category.name}</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              {category.items.map((item) => (
                <li key={item} className="rounded-full bg-rose-50 px-3 py-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
