function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Checkout</p>
        <h1 className="text-3xl font-semibold text-stone-800">Secure your order</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <form className="space-y-4 rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Full Name" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Phone" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Email" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="House Address" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Village" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="City" />
            <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="District" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="State" />
            <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Pincode" />
          </div>
          <div className="rounded-2xl bg-rose-50 p-4">
            <p className="font-semibold text-stone-800">Booking Request</p>
            <p className="mt-2 text-sm text-stone-700">We will contact you after you submit your request to confirm availability and next steps.</p>
          </div>
          <button className="w-full rounded-full bg-moss-600 px-4 py-3 font-semibold text-white">Send Booking Request</button>
        </form>
        <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-stone-800">Booking Summary</h2>
          <div className="mt-4 space-y-3 text-sm text-stone-600">
            <div className="flex items-center justify-between"><span>Baby Bunny</span><span>Selected</span></div>
            <div className="flex items-center justify-between"><span>Contact</span><span>9361827537 / 9841439226</span></div>
            <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-lg font-semibold text-stone-800"><span>Status</span><span>Pending review</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
