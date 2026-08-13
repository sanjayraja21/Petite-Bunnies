import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaUser,
  FaInstagram,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.35),transparent_40%),linear-gradient(135deg,#fffaf5_0%,#fef2f2_100%)] text-stone-700">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md sm:h-14 sm:w-14">
  <img
    src="/images/logo.jpg"
    alt="Petite Bunnies Logo"
    className="h-full w-full object-cover"
  />
</div>

            <div className="hidden min-[400px]:block">
              <p className="font-semibold text-stone-800 sm:text-base">
                Petite Bunnies
              </p>

              <p className="text-[10px] text-moss-600 sm:text-xs">
                Healthy Bunnies • Happy Families
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-6 md:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'text-moss-700'
                      : 'text-stone-600 hover:text-moss-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </nav>

          {/* =================================================
              DESKTOP ACTION ICONS
          ================================================= */}

          <div className="hidden items-center gap-2 md:flex">

            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition hover:bg-rose-50 hover:text-moss-600"
            >
              <FaSearch />
            </button>

            {/* Wishlist */}

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition hover:bg-rose-50 hover:text-rose-600"
            >
              <FaHeart />
            </Link>

            {/* Cart */}

            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition hover:bg-rose-50 hover:text-moss-600"
            >
              <FaShoppingCart />
            </Link>

            {/* User */}

            <Link
              to="/login"
              aria-label="User account"
              className="flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition hover:bg-rose-50 hover:text-moss-600"
            >
              <FaUser />
            </Link>

          </div>

          {/* =================================================
              MOBILE HAMBURGER BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-lg text-stone-700 shadow-sm transition duration-300 hover:bg-rose-50 hover:text-moss-700 md:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`overflow-hidden border-t border-stone-100 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >

          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? 'bg-moss-100 text-moss-700'
                        : 'text-stone-700 hover:bg-rose-50 hover:text-moss-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

            </div>

            {/* Mobile Actions */}

            <div className="mt-4 grid grid-cols-4 gap-2 border-t border-stone-100 pt-4">

              {/* Search */}

              <button
                type="button"
                className="flex flex-col items-center gap-1 rounded-xl bg-stone-50 px-3 py-3 text-xs text-stone-600 transition hover:bg-rose-50 hover:text-moss-700"
              >
                <FaSearch className="text-base" />
                Search
              </button>

              {/* Wishlist */}

              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className="flex flex-col items-center gap-1 rounded-xl bg-stone-50 px-3 py-3 text-xs text-stone-600 transition hover:bg-rose-50 hover:text-rose-600"
              >
                <FaHeart className="text-base" />
                Wishlist
              </Link>

              {/* Cart */}

              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="flex flex-col items-center gap-1 rounded-xl bg-stone-50 px-3 py-3 text-xs text-stone-600 transition hover:bg-rose-50 hover:text-moss-700"
              >
                <FaShoppingCart className="text-base" />
                Cart
              </Link>

              {/* Account */}

              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="flex flex-col items-center gap-1 rounded-xl bg-stone-50 px-3 py-3 text-xs text-stone-600 transition hover:bg-rose-50 hover:text-moss-700"
              >
                <FaUser className="text-base" />
                Account
              </Link>

            </div>

          </nav>

        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>
        {children}
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mt-16 border-t border-stone-200/80 bg-white/80 py-10">

        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">

          {/* =================================================
              ABOUT
          ================================================= */}

          <div>

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-pink-500 text-xl text-white shadow-md">
                🐰
              </div>

              <h3 className="text-lg font-semibold text-stone-800">
                Petite Bunnies
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-stone-600">
              Premium fluffy companions, cheerful chicks, and healthy hens
              delivered with love and care.
            </p>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3 className="mb-4 text-lg font-semibold text-stone-800">
              Contact
            </h3>

            <div className="space-y-3">

              {/* Phone 1 */}

              <a
                href="tel:9361827537"
                className="flex items-center gap-3 text-sm text-stone-600 transition hover:text-moss-600"
              >
                <FaPhoneAlt className="text-moss-600" />
                9361827537
              </a>

              {/* Phone 2 */}

              <a
                href="tel:9841439226"
                className="flex items-center gap-3 text-sm text-stone-600 transition hover:text-moss-600"
              >
                <FaPhoneAlt className="text-moss-600" />
                9841439226
              </a>

              {/* Email */}

              <a
                href="mailto:Petite.bunnies.1@gmail.com"
                className="flex items-center gap-3 text-sm text-stone-600 transition hover:text-moss-600"
              >
                <FaEnvelope className="text-moss-600" />
                Petite.bunnies.1@gmail.com
              </a>

            </div>

          </div>

          {/* =================================================
              SOCIAL MEDIA
          ================================================= */}

          <div>

            <h3 className="mb-4 text-lg font-semibold text-stone-800">
              Follow Us
            </h3>

            <div className="flex flex-col gap-3">

              {/* Petite Bunnies Instagram */}

              <a
                href="https://www.instagram.com/petite.bunnies._/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Petite Bunnies Instagram"
                className="group flex items-center gap-3 text-sm text-stone-600 transition hover:text-pink-600"
              >
                <FaInstagram className="text-xl transition-transform group-hover:scale-110" />

                <span>
                  @petite.bunnies._
                </span>
              </a>

              {/* Sankbeast Boy Instagram */}

              <a
                href="https://www.instagram.com/sankbeast_boy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sankbeast Boy Instagram"
                className="group flex items-center gap-3 text-sm text-stone-600 transition hover:text-pink-600"
              >
                <FaInstagram className="text-xl transition-transform group-hover:scale-110" />

                <span>
                  @sankbeast_boy
                </span>
              </a>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="mx-auto mt-8 max-w-7xl border-t border-stone-200 px-4 pt-6 text-center sm:px-6 lg:px-8">

          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Petite Bunnies. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Layout;