import { products } from '../data/products';
import { Category } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  filter: string;
}

export default function ProductGrid({ filter }: ProductGridProps) {
  const filtered =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === (filter as Category));

  const filterLabels: Record<string, string> = {
    all: 'All Delicacies',
    burfi: 'Burfi',
    ladoo: 'Ladoo',
    'all-season': 'All Season',
    'winter-delicacy': 'Winter Delicacy',
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-1">Handcrafted Daily</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{filterLabels[filter]}</h2>
          </div>
          <p className="text-gray-500 text-sm">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
