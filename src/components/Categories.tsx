import { categories } from '../data/products';

interface CategoriesProps {
  onSelect: (category: string) => void;
}

export default function Categories({ onSelect }: CategoriesProps) {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Browse By Type</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Our Collection</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-white font-bold text-lg md:text-xl">{cat.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
