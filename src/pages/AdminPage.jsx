function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Admin Dashboard</p>
        <h1 className="text-3xl font-semibold text-stone-800">Manage orders, products, and customers</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: 'Customers', value: '128' },
          { label: 'Orders', value: '42' },
          { label: 'Products', value: '18' },
          { label: 'Revenue', value: '₹86k' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
            <p className="text-sm text-stone-600">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-stone-800">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
