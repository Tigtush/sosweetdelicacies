import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://sosweetdelicacies.in/cdn/shop/files/So_Sweet_Banner_3.png?v=1774343584&width=3840"
          alt="So Sweet Delicacies Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-emerald-300 text-sm md:text-base font-medium tracking-widest uppercase mb-4 animate-fade-in">
          Sweet Traditions &nbsp;&#10084;&nbsp; Vegan Heart
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Indulge in
          <br />
          <span className="text-emerald-300">Guilt-Free</span> Sweetness
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Authentic Indian sweets crafted with love, made purely vegan — because sweetness should be kind.
        </p>
        <button
          onClick={onExplore}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5"
        >
          Explore Our Delicacies
        </button>
      </div>

      <button
        onClick={onExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
