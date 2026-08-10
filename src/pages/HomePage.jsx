import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaLeaf, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const featuredProducts = [
  { id: 1, name: 'Bunny', category: 'Rabbit', breed: 'Bunny', availability: 'Available', image: '/images/bunny/bunny.jpg' },
  { id: 2, name: 'Baby Chick', category: 'Chick', breed: 'Baby Chick',  availability: 'Available', image: '/images/chicks/chicks.jpg' },
  { id: 3, name: 'Country Hen', category: 'Hen', breed: 'Country Hen',  availability: 'Available', image: '/images/hens/hen.jpg' },
];

function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-[2rem] p-8 lg:p-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">🌿 Healthy bunnies • happy families</div>
          <h1 className="text-4xl font-bold leading-tight text-stone-800 sm:text-5xl">Find Your Perfect Companion</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">Discover beautiful bunnies, cheerful chicks, and productive hens from our farm with caring support and easy booking.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/shop" className="rounded-full bg-moss-600 px-6 py-3 font-semibold text-white transition hover:bg-moss-700">Explore Now</Link>
            <a href="tel:9361827537 / 9841439226" className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700">Contact Us</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-600">
            <span className="flex items-center gap-2"><FaStar className="text-amber-500" /> 4.9/5 Customer Love</span>
            <span className="flex items-center gap-2"><FaLeaf className="text-moss-600" /> Vaccinated & Healthy</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-xl">
          <div className="overflow-hidden rounded-[1.5rem] bg-stone-100">
            <img src="/images/hpg.jpg" alt="Bunny in garden" className="h-[420px] w-full rounded-[1.5rem] object-cover object-center" />
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Featured Animals</p>
            <h2 className="text-2xl font-semibold text-stone-800">Available now for loving homes</h2>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-moss-700">View all</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} whileHover={{ y: -6 }} className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/80 shadow-md">
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm text-rose-600">{product.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-stone-800">{product.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{product.breed}</p>
                <div className="mt-3 space-y-1 text-sm text-stone-600">
                  
                  <p className="font-semibold text-moss-700">Availability: {product.availability}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Link to={`/product/${product.id}`} className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-2 text-sm font-medium text-rose-700">View <FaArrowRight /></Link>
                  <a href="tel:9361827537 / 9841439226" className="inline-flex items-center gap-2 rounded-full bg-moss-600 px-3 py-2 text-sm font-medium text-white"><FaPhoneAlt /> Contact</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] bg-white/80 p-8 shadow-lg lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Why Petites?</p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-800">Trusted care, beautiful animals, and dependable booking support.</h2>
            <p className="mt-4 text-stone-600">Our family-run farm carefully nurtures every bunny, chick, and hen before they join their new homes.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Gentle handling', 'Easy booking', 'Quick response', 'Farm-raised care'].map((item) => (
              <div key={item} className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm font-medium text-stone-700">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
