function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Order History</p>
        <h1 className="text-3xl font-semibold text-stone-800">Track every purchase</h1>
      </div>
      <div className="space-y-4">
        {[
          { id: 'ORD-1001', item: 'Baby Bunny', status: 'Delivered', total: '₹3,200' },
          { id: 'ORD-1002', item: 'Layer Chick', status: 'Confirmed', total: '₹850' },
        ].map((order) => (
          <div key={order.id} className="flex flex-col justify-between rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md md:flex-row md:items-center">
            <div>
              <h2 className="font-semibold text-stone-800">{order.id}</h2>
              <p className="text-sm text-stone-600">{order.item}</p>
            </div>
            <div className="text-sm text-stone-600">{order.total}</div>
            <div className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
