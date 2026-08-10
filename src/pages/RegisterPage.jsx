function RegisterPage() {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-16 lg:px-8">
      <div className="w-full max-w-md rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Register</p>
        <h1 className="mt-2 text-3xl font-semibold text-stone-800">Create your account</h1>
        <form className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Full Name" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Phone" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Email" />
          <input className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-moss-600 px-4 py-3 font-semibold text-white">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
