import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Clock,
  MapPin,
  Phone,
  Instagram,
  ChevronRight,
} from 'lucide-react';
import heroImage from './assets/WaterAndIce_Hero.jpg';
import heroImage1 from './assets/9.png';
import logoImage from './assets/13.png';
import navLogoImage from './assets/WaterAndIce_NavLogo.png';
import menuImage from './assets/menu.png';
import churrosLocosImg from './assets/products/WaterAndIce_ChurrosLocos.jpg';
import cucumberLimeMintImg from './assets/products/WaterAndIce_CucumberLimeMint.jpg';
import fruitCocktailSpicyImg from './assets/products/WaterAndIce_FruitCocktailSpicy.jpg';
import fruitParfaitImg from './assets/products/WaterAndIce_FruitParfait.jpg';
import frutiLokaImg from './assets/products/WaterAndIce_FrutiLoka.jpg';
import jicamaCupImg from './assets/products/WaterAndIce_JicamaCup.jpg';
import mangoLicuadoImg from './assets/products/WaterAndIce_MangoLicuado.jpg';
import mangoneadaImg from './assets/products/WaterAndIce_Mangoneada.jpg';
import mintChipMilkshakeImg from './assets/products/WaterAndIce_MintAndChipMilkshake.jpg';
import pepiHuateImg from './assets/products/WaterAndIce_PepiHuate.jpg';
import pepiTakisImg from './assets/products/WaterAndIce_PepiTakis.jpg';
import pinaLokaImg from './assets/products/WaterAndIce_PinaLoka.jpg';
import pinoColadaLicuadoImg from './assets/products/WaterAndIce_PinoColadaLicuado.jpg';
import regularHorchataImg from './assets/products/WaterAndIce_RegualrHorchata.jpg';
import rootbeerFloatImg from './assets/products/WaterAndIce_RootbeerFloat.jpg';
import sandiaAguaFrescaImg from './assets/products/WaterAndIce_SandiaAguaFresca.jpg';
import sandiaLokaImg from './assets/products/WaterAndIce_SandiaLoka.jpg';
import shavedIceImg from './assets/products/WaterAndIce_ShavedIce.jpg';
import strawberrySundaeImg from './assets/products/WaterAndIce_StawberrySundae.jpg';
import strawberriesAndCreamImg from './assets/products/WaterAndIce_StrawberriesAndCream.jpg';
import strawberryBananaSmoothieImg from './assets/products/WaterAndIce_StrawberryBananaSmoothie.jpg';
import strawberryHorchataImg from './assets/products/WaterAndIce_StrawberryHorchata.jpg';
import tostiEloteImg from './assets/products/WaterAndIce_TostiElote.jpg';
import tostiHuateImg from './assets/products/WaterAndIce_TostiHuate.jpg';
import tostiVerduraImg from './assets/products/WaterAndIce_TostiVerdura.jpg';
import tripleBerrySmoothieImg from './assets/products/WaterAndIce_TripleBerryBananaSmoothie.jpg';
import tropicalBlendSmoothieImg from './assets/products/WaterAndIce_TropicalBlendSmoothie.jpg';

const PRODUCTS = [
  { id: 1,  name: "Churros Locos",               image: churrosLocosImg },
  { id: 2,  name: "Cucumber Lime Mint",           image: cucumberLimeMintImg },
  { id: 3,  name: "Fruit Cocktail Spicy",         image: fruitCocktailSpicyImg },
  { id: 4,  name: "Fruit Parfait",                image: fruitParfaitImg },
  { id: 5,  name: "Fruti Loka",                   image: frutiLokaImg },
  { id: 6,  name: "Jicama Cup",                   image: jicamaCupImg },
  { id: 7,  name: "Mango Licuado",                image: mangoLicuadoImg },
  { id: 8,  name: "Mangoneada",                   image: mangoneadaImg },
  { id: 9,  name: "Mint & Chip Milkshake",        image: mintChipMilkshakeImg },
  { id: 10, name: "Pepi Huate",                   image: pepiHuateImg },
  { id: 11, name: "Pepi Takis",                   image: pepiTakisImg },
  { id: 12, name: "Pina Loka",                    image: pinaLokaImg },
  { id: 13, name: "Pino Colada Licuado",          image: pinoColadaLicuadoImg },
  { id: 14, name: "Regular Horchata",             image: regularHorchataImg },
  { id: 15, name: "Rootbeer Float",               image: rootbeerFloatImg },
  { id: 16, name: "Sandia Agua Fresca",           image: sandiaAguaFrescaImg },
  { id: 17, name: "Sandia Loka",                  image: sandiaLokaImg },
  { id: 18, name: "Shaved Ice",                   image: shavedIceImg },
  { id: 19, name: "Strawberry Sundae",            image: strawberrySundaeImg },
  { id: 20, name: "Strawberries & Cream",         image: strawberriesAndCreamImg },
  { id: 21, name: "Strawberry Banana Smoothie",   image: strawberryBananaSmoothieImg },
  { id: 22, name: "Strawberry Horchata",          image: strawberryHorchataImg },
  { id: 23, name: "Tosti Elote",                  image: tostiEloteImg },
  { id: 24, name: "Tosti Huate",                  image: tostiHuateImg },
  { id: 25, name: "Tosti Verdura",                image: tostiVerduraImg },
  { id: 26, name: "Triple Berry Banana Smoothie", image: tripleBerrySmoothieImg },
  { id: 27, name: "Tropical Blend Smoothie",      image: tropicalBlendSmoothieImg },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; href?: string; onClick?: () => void }[] = [
    { name: 'Home',     href: '#home' },
    { name: 'Gallery',  href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Menu',     onClick: () => setIsMenuModalOpen(true) },
    { name: 'About Us', href: '#about' },
    { name: 'Contact',  href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm text-stone-900' : 'bg-transparent py-2 text-stone-900'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-end gap-2 group whitespace-nowrap">
            <img
              src={navLogoImage}
              alt="Water And Ice"
              className="h-10 w-auto object-contain"
            />
            <span className="text-sm font-bold tracking-widest text-stone-900">
              40Th St &amp; Thomas
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.onClick ? (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-inherit"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) =>
                  link.onClick ? (
                    <button
                      key={link.name}
                      onClick={() => { setIsMenuOpen(false); link.onClick!(); }}
                      className="text-lg font-serif font-medium text-stone-900 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-serif font-medium text-stone-900"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroImage}
            alt="Water And Ice hero"
            className="w-full h-full object-cover brightness-[1.02]"
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-white/25" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-stone-900 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img
              src={logoImage}
              alt="Water And Ice — The Original Thrifty Ice Cream"
              className="w-[min(90vw,680px)] drop-shadow-2xl mb-4"
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#gallery"
                className="px-8 py-4 bg-white/80 border border-stone-200 text-stone-900 rounded-full font-medium hover:bg-stone-50 transition-colors backdrop-blur-sm shadow-sm flex items-center justify-center gap-2"
              >
                View Flavors <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/80 border border-stone-200 text-stone-900 rounded-full font-medium hover:bg-stone-50 transition-colors backdrop-blur-sm shadow-sm"
              >
                Find Us
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400"
        >
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="relative py-24 overflow-hidden">
        {/* Water background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-blue-50" />

        {/* Wave layer 1 */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="absolute bottom-0 w-[200%] h-48" viewBox="0 0 2880 200" preserveAspectRatio="none" fill="none">
            <path d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 C1680,160 1920,40 2160,100 C2400,160 2640,40 2880,100 L2880,200 L0,200 Z" fill="#7dd3fc" fillOpacity="0.5" />
          </svg>
        </motion.div>

        {/* Wave layer 2 */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ x: [0, 80, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="absolute bottom-0 w-[200%] h-64" viewBox="0 0 2880 250" preserveAspectRatio="none" fill="none">
            <path d="M0,130 C360,60 720,200 1080,130 C1440,60 1800,200 2160,130 C2520,60 2880,200 2880,130 L2880,250 L0,250 Z" fill="#38bdf8" fillOpacity="0.35" />
          </svg>
        </motion.div>

        {/* Wave layer 3 — top shimmer */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="absolute top-0 w-[200%] h-32" viewBox="0 0 2880 120" preserveAspectRatio="none" fill="none">
            <path d="M0,60 C360,10 720,110 1080,60 C1440,10 1800,110 2160,60 C2520,10 2880,110 2880,60 L2880,0 L0,0 Z" fill="#bae6fd" fillOpacity="0.6" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Signature Flavors</h2>
            <div className="w-20 h-1 bg-stone-900 mb-6" />
            <p className="text-stone-600 text-lg">
              Each item is a masterpiece, made with locally sourced ingredients and a passion for perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-stone-900 text-center">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-200" />

        {/* Animated bubbles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{ width: `${30 + i * 14}px`, height: `${30 + i * 14}px`, left: `${6 + i * 15}%`, bottom: '-40px' }}
            animate={{ y: [0, -(500 + i * 60)], opacity: [0, 0.5, 0] }}
            transition={{ duration: 5 + i * 1.1, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
          />
        ))}

        {/* Top wave */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-8 md:h-12" fill="#f5f5f4">
            <path d="M0,35 Q180,0 360,25 Q540,50 720,20 Q900,0 1080,30 Q1260,50 1440,15 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-8 md:h-12" fill="white">
            <path d="M0,15 Q180,50 360,25 Q540,0 720,30 Q900,50 1080,20 Q1260,0 1440,35 L1440,50 L0,50 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <span className="text-blue-700 uppercase tracking-widest text-xs mb-2 block">What We Offer</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-950 mb-3">Purified Reverse Osmosis Water</h2>
              <p className="text-blue-800 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                We use a professional reverse osmosis purification system to remove impurities and deliver clean, fresh, great-tasting water.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Regular */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/70 shadow-lg flex flex-col"
              >
                <span className="text-blue-600 uppercase tracking-widest text-xs font-bold mb-4">Pay As You Go</span>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-black text-6xl text-blue-950 leading-none">$0.40</span>
                  <span className="text-blue-600 text-sm font-semibold mb-2">/ gallon</span>
                </div>
                <p className="text-blue-700 text-sm mb-6 leading-relaxed">
                  No commitment needed. Fill up any time and pay per gallon — perfect for occasional use or trying us out.
                </p>
                <ul className="space-y-2 mt-auto">
                  {['No sign-up required', 'Fill any size container', 'Fresh every visit'].map(b => (
                    <li key={b} className="flex items-center gap-2 text-blue-800 text-sm">
                      <span className="w-4 h-4 rounded-full bg-blue-400/40 flex items-center justify-center text-blue-700 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Prepaid */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-700/80 backdrop-blur-md rounded-2xl p-8 border border-blue-500/50 shadow-xl flex flex-col relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">Best Value</span>
                <span className="text-cyan-300 uppercase tracking-widest text-xs font-bold mb-4">Prepaid Program</span>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-black text-6xl text-white leading-none">$0.35</span>
                  <span className="text-cyan-300 text-sm font-semibold mb-2">/ gallon</span>
                </div>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Pre-purchase your water and save. Ideal for families or daily use — the more you use, the more you save.
                </p>
                <ul className="space-y-2 mt-auto">
                  {['Save 12% vs regular price', 'Great for daily & family use', 'Locked-in low rate'].map(b => (
                    <li key={b} className="flex items-center gap-2 text-blue-100 text-sm">
                      <span className="w-4 h-4 rounded-full bg-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="relative py-12 overflow-hidden bg-[#0b1a35]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-cyan-400 uppercase tracking-widest text-xs mb-2 block">Our Story</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Your Neighborhood Stop for Water, Ice & More
            </h2>
            <div className="w-12 h-0.5 bg-cyan-400 mx-auto" />
          </motion.div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/4 relative rounded-2xl overflow-hidden aspect-[4/5] shrink-0 shadow-xl"
            >
              <img src={heroImage1} alt="Water And Ice shop" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a35]/60 to-transparent" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 flex flex-col gap-4 pt-1"
            >
              <p className="text-slate-300 text-sm leading-relaxed">
                Located at <span className="text-white font-semibold">40th Street & Thomas in Phoenix, AZ</span>, Water &amp; Ice is a one-stop neighborhood shop serving the community with quality, freshness, and great value every day.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                We carry <span className="text-white font-semibold">The Original Thrifty Ice Cream</span> — a classic Phoenix staple — alongside a wide variety of frozen treats, agua frescas, licuados, smoothies, and savory snacks. From Mangoneadas to Sandia Loka, every item is made fresh to order with real ingredients.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                We also offer <span className="text-white font-semibold">purified reverse osmosis water</span> by the gallon at some of the most affordable prices in town — because clean water shouldn't be a luxury.
              </p>

              {/* Highlights row */}
              <div className="grid grid-cols-2 gap-3 mt-1">
                {[
                  { value: '$0.35', label: 'Per Gallon' },
                  { value: '7', label: 'Days a Week' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-center">
                    <div className="font-black text-xl text-cyan-400 leading-none mb-0.5">{value}</div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>

              {/* What we offer pills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  'Thrifty Ice Cream', 'Purified RO Water', 'Mangoneadas', 'Agua Frescas',
                  'Licuados & Smoothies', 'Shaved Ice', 'Fruit Cocktails', 'Snacks & More',
                ].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-slate-300 text-xs font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#FDFCFB] rounded-2xl p-6 md:p-10 border border-stone-100 shadow-sm overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Visit Our Shop</h2>
                <p className="text-stone-500 mb-6 text-sm">
                  We'd love to see you! Stop by for a tasting or just to say hello.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Address</h4>
                      <p className="text-stone-500 text-sm">3911 E Thomas Rd #4, Phoenix, AZ 85018</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Phone</h4>
                      <a href="tel:+16022751231" className="text-stone-500 text-sm hover:text-stone-900 transition-colors">
                        602-275-1231
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-0.5">Opening Hours</h4>
                      <div className="text-stone-500 text-sm space-y-0.5">
                        <p>Mon – Thu: 9:00 AM – 9:00 PM</p>
                        <p>Fri – Sat: 9:00 AM – 10:00 PM</p>
                        <p>Sun: 10:00 AM – 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="https://www.instagram.com/waterice40thomas_/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.tiktok.com/@waterandice40thomas" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="h-[280px] lg:h-auto rounded-2xl overflow-hidden border border-stone-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.066467364536!2d-111.9984!3d33.4805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0e609796e68b%3A0x6446e5899449f84b!2s3911%20E%20Thomas%20Rd%20%234%2C%20Phoenix%2C%20AZ%2085018!5e0!3m2!1sen!2sus!4v1710450000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Menu Modal */}
      <AnimatePresence>
        {isMenuModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            onClick={() => setIsMenuModalOpen(false)}
          >
            <button
              onClick={() => setIsMenuModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={menuImage}
              alt="Water And Ice Menu"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-4 border-t border-stone-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-end gap-2">
            <img
              src={navLogoImage}
              alt="Water And Ice"
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-bold tracking-widest text-stone-900">
              40Th St &amp; Thomas
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-stone-400 text-sm">
              © 2026 Water And Ice<span className="hidden sm:inline">: 40Th St & Thomas</span>. All rights reserved.
            </p>
            <p className="text-stone-400 text-xs">
              Created by{' '}
              <a
                href="https://www.summervibe.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-700 underline underline-offset-2 transition-colors"
              >
                summervibe.tech
              </a>
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
