import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaLeaf,
  FaArrowRight,
  FaPhoneAlt,
  FaHeart,
  FaShieldAlt,
  FaTruck,
} from 'react-icons/fa';

// =====================================================
// FEATURED PRODUCTS
// =====================================================

const featuredProducts = [
  {
    id: 1,
    name: 'Bunny',
    category: 'Rabbit',
    breed: 'Bunny',
    availability: 'Available',
    image: '/images/bunny/bunny.jpg',
  },
  {
    id: 2,
    name: 'Baby Chick',
    category: 'Chick',
    breed: 'Baby Chick',
    availability: 'Available',
    image: '/images/chicks/chicks.jpg',
  },
  {
    id: 3,
    name: 'Country Hen',
    category: 'Hen',
    breed: 'Country Hen',
    availability: 'Available',
    image: '/images/hens/hen.jpg',
  },
];

// =====================================================
// WHY PETITES FEATURES
// =====================================================

const whyPetitesFeatures = [
  {
    title: 'Gentle Handling',
    description: 'Every animal is handled with proper care and attention.',
    icon: FaHeart,
  },
  {
    title: 'Easy Booking',
    description: 'Quick and simple booking process for your new companion.',
    icon: FaShieldAlt,
  },
  {
    title: 'Quick Response',
    description: 'Get fast support whenever you need help.',
    icon: FaPhoneAlt,
  },
  {
    title: 'Farm-Raised Care',
    description: 'Healthy animals raised with care in a friendly environment.',
    icon: FaLeaf,
  },
];

// =====================================================
// ANIMATION SETTINGS
// =====================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 25,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// =====================================================
// HERO SECTION
// =====================================================

function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">

        {/* ================= HERO CONTENT ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="glass rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11"
        >
          {/* Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
            <span>🌿</span>
            <span>Healthy animals • Happy families</span>
          </div>

          {/* Heading */}

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-stone-800 sm:text-5xl lg:text-[3.5rem]">
            Find Your
            <span className="block">
              Perfect Companion
            </span>
          </h1>

          {/* Description */}

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            Discover beautiful bunnies, cheerful chicks, and productive hens
            from our farm with caring support and easy booking.
          </p>

          {/* Buttons */}

          <div className="mt-7 flex flex-wrap gap-3">

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-moss-600 px-6 py-3 font-semibold text-grey shadow-md transition duration-300 hover:-translate-y-1 hover:bg-moss-700 hover:shadow-lg"
            >
              Explore Now
              <FaArrowRight className="text-sm" />
            </Link>

            <a
              href="tel:9361827537"
              aria-label="Call Petites Farm"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-moss-500 hover:text-moss-700"
            >
              <FaPhoneAlt className="text-sm" />
              Contact Us
            </a>

          </div>

          {/* Trust Information */}

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-600">

            <span className="flex items-center gap-2">
              <FaStar className="text-amber-500" />
              4.9/5 Customer Love
            </span>

            <span className="flex items-center gap-2">
              <FaLeaf className="text-moss-600" />
              Healthy & Well Cared
            </span>

          </div>
        </motion.div>

        {/* ================= HERO IMAGE ================= */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-xl sm:p-5"
        >
          <div className="group relative h-[300px] overflow-hidden rounded-[1.5rem] bg-stone-100 sm:h-[360px] lg:h-[430px]">

            <img
              src="/images/hpg.jpg"
              alt="Healthy bunny in a garden"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />

            {/* Image Overlay */}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
              <p className="text-sm font-medium text-white">
                Raised with love and care
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

// =====================================================
// PRODUCT CARD
// =====================================================

function ProductCard({ product }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/80 shadow-md transition-shadow duration-300 hover:shadow-xl"
    >

      {/* Product Image */}

      <div className="relative h-56 overflow-hidden bg-stone-100 sm:h-64">

        <img
          src={product.image}
          alt={`${product.name} - ${product.category}`}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Availability */}

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-moss-700 shadow-sm backdrop-blur">
          {product.availability}
        </div>

      </div>

      {/* Product Details */}

      <div className="p-5">

        <p className="text-sm font-medium text-rose-600">
          {product.category}
        </p>

        <h3 className="mt-1 text-xl font-semibold text-stone-800">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-stone-600">
          {product.breed}
        </p>

        <p className="mt-3 text-sm font-semibold text-moss-700">
          Availability: {product.availability}
        </p>

        {/* Product Buttons */}

        <div className="mt-5 flex items-center justify-between gap-3">

          <Link
            to={`/product/${product.id}`}
            aria-label={`View details for ${product.name}`}
            className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 transition duration-300 hover:bg-rose-200"
          >
            View
            <FaArrowRight className="text-xs" />
          </Link>

          <a
            href="tel:9361827537"
            aria-label={`Contact about ${product.name}`}
            className="inline-flex items-center gap-2 rounded-full bg-moss-600 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-moss-700"
          >
            <FaPhoneAlt className="text-xs" />
            Contact
          </a>

        </div>
      </div>

    </motion.article>
  );
}

// =====================================================
// FEATURED PRODUCTS
// =====================================================

function FeaturedProducts() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 pt-4 lg:px-8"
      aria-labelledby="featured-products-heading"
    >

      {/* Section Header */}

      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Featured Animals
          </p>

          <h2
            id="featured-products-heading"
            className="mt-1 text-2xl font-semibold text-stone-800 sm:text-3xl"
          >
            Available now for loving homes
          </h2>

        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold text-moss-700 transition hover:text-moss-800"
        >
          View All
          <FaArrowRight className="text-xs" />
        </Link>

      </div>

      {/* Product Grid */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

// =====================================================
// QUICK SERVICES
// =====================================================

function QuickServices() {
  const services = [
    {
      icon: FaHeart,
      title: 'Healthy Animals',
      text: 'Carefully raised and maintained animals.',
    },
    {
      icon: FaShieldAlt,
      title: 'Trusted Service',
      text: 'Friendly and dependable customer support.',
    },
    {
      icon: FaTruck,
      title: 'Easy Process',
      text: 'Simple booking and smooth communication.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 lg:px-8">

      <div className="grid gap-4 sm:grid-cols-3">

        {services.map((service) => {

          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                <Icon />
              </div>

              <div>

                <h3 className="font-semibold text-stone-800">
                  {service.title}
                </h3>

                <p className="mt-1 text-sm text-stone-600">
                  {service.text}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

// =====================================================
// WHY PETITES
// =====================================================

function WhyPetites() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 lg:px-8">

      <div className="grid gap-8 rounded-[2rem] bg-white/80 p-6 shadow-lg sm:p-8 lg:grid-cols-2 lg:p-10">

        {/* Left Side */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Why Petites?
          </p>

          <h2 className="mt-2 text-2xl font-semibold leading-tight text-stone-800 sm:text-3xl">
            Trusted care, beautiful animals, and dependable booking support.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-stone-600">
            Our family-run farm carefully nurtures every bunny, chick, and hen
            before they join their new homes. We focus on healthy animals,
            gentle handling, and friendly customer support.
          </p>

          {/* Phone Numbers */}

          <div className="mt-6 flex flex-wrap gap-3">

            <a
              href="tel:9361827537"
              className="inline-flex items-center gap-2 rounded-full bg-moss-100 px-4 py-2 text-sm font-semibold text-moss-700 transition hover:bg-moss-200"
            >
              <FaPhoneAlt />
              9361827537
            </a>

            <a
              href="tel:9841439226"
              className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-200"
            >
              <FaPhoneAlt />
              9841439226
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <div className="grid gap-4 sm:grid-cols-2">

          {whyPetitesFeatures.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-rose-100 bg-rose-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-moss-600 shadow-sm">
                  <Icon />
                </div>

                <h3 className="font-semibold text-stone-800">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

// =====================================================
// HOME PAGE
// =====================================================

function HomePage() {
  return (
    <main className="pb-16">

      <HeroSection />

      <FeaturedProducts />

      <QuickServices />

      <WhyPetites />

    </main>
  );
}

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default HomePage;