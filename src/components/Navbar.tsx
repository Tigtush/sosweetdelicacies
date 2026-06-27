import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

interface NavbarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function Navbar({ activeFilter, onFilterChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'All', id: 'all' },
    { label: 'Burfi', id: 'burfi' },
    { label: 'Ladoo', id: 'ladoo' },
    { label: 'All Season', id: 'all-season' },
    { label: 'Winter Delicacy', id: 'winter-delicacy' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => onFilterChange('all')}
            className="flex items-center gap-3 group"
          >
            <img
              src="https://sosweetdelicacies.in/cdn/shop/files/So_Sweet_Delicacies_Logo_2.png?height=70&v=1769929213"
              alt="So Sweet Delicacies"
              className="h-10 md:h-12 object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onFilterChange(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === link.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50">
              <ShoppingBag size={20} />
            </button>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onFilterChange(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  activeFilter === link.id
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
