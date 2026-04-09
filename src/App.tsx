import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  IceCream, 
  ShoppingBag, 
  Gift, 
  Clock, 
  MapPin, 
  Phone,
  Instagram,
  Facebook,
  ChevronRight,
  Droplets
} from 'lucide-react';
import heroImage from './assets/1.png';
import heroImage1 from './assets/9.png';
import mangonadaImg from './assets/products/mangonada.jpg';
import pinaLocaImg from './assets/products/pina_loca.jpg';
import sandiaLocaImg from './assets/products/sandia_loca.jpg';
import fresasConCremaImg from './assets/products/fresas_con_crema.jpg';
import tostiveduraImg from './assets/products/tostivedura.jpg';
import takilocosImg from './assets/products/takilocos.jpg';
import spicyFruitImg from './assets/products/spicy_fruit_cocktail.jpg';
import pepihuateImg from './assets/products/pepihuate.jpg';

const PRODUCTS = [
  {
    id: 101,
    name: "Mangonada",
    description: "Fresh mango layered with shaved ice, chamoy, tamarind candy, chili, and lime, for the perfect sweet, spicy, and tangy kick.",
    image: mangonadaImg
  },
  {
    id: 102,
    name: "Piña Loca",
    description: "Juicy pineapple mixed with chamoy, chili, lime, and tamarind candy for a refreshing tropical explosion.",
    image: pinaLocaImg
  },
  {
    id: 103,
    name: "Sandía Loca",
    description: "Fresh watermelon tossed with chamoy, chili, and lime — light, hydrating, and packed with flavor.",
    image: sandiaLocaImg
  },
  {
    id: 104,
    name: "Fresas con Crema",
    description: "Fresh strawberries layered with sweet cream, coconut, granola, and whipped cream.",
    image: fresasConCremaImg
  },
  {
    id: 105,
    name: "Tostivedura",
    description: "Corn with mayo, lime, cheese, and optional hot Cheetos.",
    image: tostiveduraImg
  },
  {
    id: 106,
    name: "Takilocos",
    description: "Takis loaded with cucumber, peanuts, chamoy, chili, and lime.",
    image: takilocosImg
  },
  {
    id: 107,
    name: "Spicy Fruit Cocktail",
    description: "Fruits with a spicy twist — Chamoy, chili, and lime for a bold flavor.",
    image: spicyFruitImg
  },
  {
    id: 108,
    name: "Pepihuate",
    description: "Crunchy, tangy and spicy — the perfect snack combo.",
    image: pepihuateImg
  },
];

const SERVICES = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Takeout",
    description: "Quick and easy pickup. Our insulated packaging keeps your scoops perfect for the ride home."
  },
  {
    icon: <IceCream className="w-6 h-6" />,
    title: "Custom Orders",
    description: "Create your own flavor combinations or custom ice cream cakes for your special celebrations."
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Dessert Packs",
    description: "Curated selections of our finest flavors, perfect for gifting or sharing at dinner parties."
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Water Service",
    description: "Premium purified water available. Stay hydrated with our crystal clear, refreshing water."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Service', href: '#service' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm text-stone-900' : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white group-hover:bg-stone-700 transition-colors">
              <IceCream className="w-6 h-6" />
            </div>
            <span className={`font-serif font-bold tracking-tight leading-none transition-all duration-300 ${
              isScrolled 
                ? 'block text-sm sm:text-base md:text-lg lg:text-2xl' 
                : 'hidden md:block md:text-lg lg:text-2xl'
            }`}>
              Water And Ice<span className="hidden sm:inline">: 40Th St & Thomas</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-colors"
              >
                {link.name}
              </a>
            ))}
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
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-serif font-medium text-stone-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Fruit splash background"
            className="w-full h-full object-cover brightness-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-stone-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-4 sm:mb-6 border border-stone-900/10 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] backdrop-blur-sm bg-white/30">
              Artisanal & Handcrafted
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 leading-[1.1] sm:leading-tight">
              Water And Ice
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide text-stone-600">
              Experience the perfect balance of pure water and creamy indulgence. 
              Crafted with love in the heart of the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#gallery" 
                className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
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

      {/* Product Gallery */}
      <section id="gallery" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Signature Flavors</h2>
            <div className="w-20 h-1 bg-stone-900 mb-6" />
            <p className="text-stone-600 text-lg">
              Each scoop is a masterpiece, made with locally sourced ingredients and a passion for perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Beyond the Scoop</h2>
            <p className="text-stone-600">We offer specialized services to make your sweet moments even more memorable.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-3xl border border-stone-100 hover:border-stone-200 hover:bg-stone-50 transition-all"
              >
                <div className="w-16 h-16 bg-stone-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5]"
              >
                <img 
                  src={heroImage1} 
                  alt="Our shop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-stone-400 uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Crafting Joy, <br />One Scoop at a Time
                </h2>
                <div className="space-y-6 text-stone-300 text-lg font-light leading-relaxed">
                  <p>
                    Founded in 2008, Water And Ice began with a simple mission: to create the purest, 
                    most flavorful ice cream using traditional techniques and modern imagination. 
                    What started as a small cart has grown into a beloved neighborhood destination.
                  </p>
                  <p>
                    We believe that the best ingredients make the best memories. That's why we 
                    partner with local dairy farmers and organic fruit growers to ensure every 
                    batch meets our exacting standards. No artificial preservatives, no shortcuts—just 
                    pure, honest indulgence.
                  </p>
                  <p>
                    Our values are rooted in community and quality. Whether you're celebrating 
                    a milestone or just treating yourself after a long day, we're here to make 
                    your day a little sweeter.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold">100%</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500">Natural</span>
                  </div>
                  <div className="w-px h-10 bg-stone-700" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold">24+</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500">Flavors</span>
                  </div>
                  <div className="w-px h-10 bg-stone-700" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold">5k+</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500">Happy Customers</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#FDFCFB] rounded-[3rem] p-8 md:p-16 border border-stone-100 shadow-sm overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Visit Our Shop</h2>
                <p className="text-stone-600 mb-12 text-lg">
                  We'd love to see you! Stop by for a tasting or just to say hello.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p className="text-stone-500">3911 E Thomas Rd #4<br />Phoenix, AZ 85018</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a href="tel:+16022751231" className="text-stone-500 hover:text-stone-900 transition-colors">
                        602-275-1231
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Opening Hours</h4>
                      <div className="text-stone-500 space-y-1">
                        <p>Mon - Thu: 12:00 PM - 9:00 PM</p>
                        <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
                        <p>Sun: 11:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <a href="#" className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-stone-200">
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

      {/* Footer */}
      <footer className="py-12 border-t border-stone-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white">
              <IceCream className="w-4 h-4" />
            </div>
            <span className="font-serif text-sm sm:text-lg lg:text-xl font-bold tracking-tight leading-none">
              Water And Ice<span className="hidden sm:inline">: 40Th St & Thomas</span>
            </span>
          </div>
          
          <p className="text-stone-400 text-sm">
            © 2026 Water And Ice<span className="hidden sm:inline">: 40Th St & Thomas</span>. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
