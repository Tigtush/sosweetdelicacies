import { Leaf, Star, Truck } from 'lucide-react';

export default function ValueBanner() {
  const values = [
    {
      icon: <Leaf size={22} className="text-emerald-600" />,
      title: '100% Vegan',
      desc: 'No animal products. Ever.',
    },
    {
      icon: <Star size={22} className="text-amber-500" />,
      title: 'Authentic Recipes',
      desc: 'Traditional methods, pure flavors.',
    },
    {
      icon: <Truck size={22} className="text-sky-600" />,
      title: 'Fresh Made Daily',
      desc: 'Crafted fresh for every order.',
    },
  ];

  return (
    <section className="bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition-colors duration-200">
              <div className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                {v.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{v.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
