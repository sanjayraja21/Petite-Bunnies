function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Cart</p>
        <h1 className="text-3xl font-semibold text-stone-800">Your selected companions</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <h2 className="font-semibold text-stone-800">Baby Bunny</h2>
              <p className="text-sm text-stone-600">Breed: Mini Lop</p>
              <p className="text-sm text-stone-600">Quantity: 1</p>
            </div>
            <button className="rounded-full bg-rose-100 px-3 py-2 text-sm font-semibold text-rose-700">Remove</button>
          </div>
          <p className="mt-4 text-sm text-stone-600">Contact us for availability and booking details.</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-stone-800">Booking Notes</h2>
          <p className="mt-3 text-sm text-stone-600">Please call or message us to confirm this companion is still available for adoption or booking.</p>
          <a href="tel:9361827537 / 9841439226" className="mt-6 inline-flex w-full justify-center rounded-full bg-moss-600 px-4 py-3 font-semibold text-white">Call Seller</a>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
