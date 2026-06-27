import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueBanner from './components/ValueBanner';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter !== 'all' || activeFilter !== 'all') {
      setTimeout(() => {
        productsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <Hero onExplore={scrollToProducts} />
      <ValueBanner />
      <Categories onSelect={handleFilterChange} />
      <div ref={productsRef}>
        <ProductGrid filter={activeFilter} />
      </div>
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
