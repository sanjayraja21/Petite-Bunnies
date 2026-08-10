import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,207,232,0.35),_transparent_40%),linear-gradient(135deg,_#fffaf5_0%,_#fef2f2_100%)] text-stone-700">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-pink-500 text-2xl text-white shadow-lg">🐰</div>
            <div>
              <p className="font-semibold text-stone-800">Petite Bunnies</p>
              <p className="text-xs text-moss-600">Healthy Bunnies • Happy Families</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-moss-700' : 'text-stone-600 hover:text-moss-600'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-stone-200 bg-white p-3 text-stone-600 shadow-sm"><FaSearch /></button>
            <Link to="/wishlist" className="rounded-full border border-stone-200 bg-white p-3 text-stone-600 shadow-sm"><FaHeart /></Link>
            <Link to="/cart" className="rounded-full border border-stone-200 bg-white p-3 text-stone-600 shadow-sm"><FaShoppingCart /></Link>
            <Link to="/login" className="rounded-full border border-stone-200 bg-white p-3 text-stone-600 shadow-sm"><FaUser /></Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-16 border-t border-stone-200/80 bg-white/80 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3 lg:px-8">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-stone-800">Petite Bunnies</h3>
            <p className="text-sm text-stone-600">Premium fluffy companions, cheerful chicks, and healthy hens delivered with love.</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-stone-800">Contact</h3>
            <p className="text-sm text-stone-600">📞 9361827537 / 9841439226</p>
            <p className="text-sm text-stone-600">✉️ Petite.bunnies.1@gmail.com</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-stone-800">Follow</h3>
            <p className="text-sm text-stone-600">Instagram: petite.bunnies._</p>
            <p className="text-sm text-stone-600">sankbeast_boy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
