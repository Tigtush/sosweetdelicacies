import { Instagram } from 'lucide-react';

const feedImages = [
  'https://sosweetdelicacies.in/cdn/shop/files/PistaBurfi_3.webp?v=1773522032',
  'https://sosweetdelicacies.in/cdn/shop/files/Gemini_Generated_Image_rcxc5rcxc5rcxc5r.png?v=1769894511',
  'https://sosweetdelicacies.in/cdn/shop/files/Pistachio-barfi-ce35d12.jpg?v=1773522032',
  'https://sosweetdelicacies.in/cdn/shop/files/ChatGPTImageFeb1_2026_10_11_26AM.png?v=1769921001',
  'https://sosweetdelicacies.in/cdn/shop/files/ChatGPTImageFeb1_2026_10_20_12AM.png?v=1769921427',
  'https://sosweetdelicacies.in/cdn/shop/files/images_7.jpg?v=1769921999',
  'https://sosweetdelicacies.in/cdn/shop/files/PistaBurfi.webp?v=1773520827',
  'https://sosweetdelicacies.in/cdn/shop/files/GajarKaHalwa.jpg?v=1775903308',
];

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={22} className="text-rose-500" />
            <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Instagram</p>
          </div>
          <a
            href="https://www.instagram.com/sosweetdelicacies_by_kiran/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
          >
            @sosweetdelicacies_by_kiran
          </a>
          <p className="text-gray-500 mt-2 text-sm">Crafted with Care</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
          {feedImages.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/sosweetdelicacies_by_kiran/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-stone-200"
            >
              <img
                src={src}
                alt={`So Sweet Delicacies Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
