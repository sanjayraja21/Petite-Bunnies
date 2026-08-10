function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Dashboard</p>
        <h1 className="text-3xl font-semibold text-stone-800">Welcome back, customer</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: 'Orders', value: '3' },
          { label: 'Wishlist', value: '5' },
          { label: 'Rewards', value: 'Gold' },
        ].map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
            <p className="text-sm text-stone-600">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-stone-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
