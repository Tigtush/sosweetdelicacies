import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) =>
    `Rs. ${price.toLocaleString('en-IN')}.00`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize">
            {product.category === 'all-season' ? 'All Season' :
             product.category === 'winter-delicacy' ? 'Winter' :
             product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-emerald-700 font-bold text-base">
            {formatPrice(product.price)}
          </p>
          <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-all duration-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white">
            <ShoppingBag size={13} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
