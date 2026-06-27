import { Instagram, MessageCircle, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img
              src="https://sosweetdelicacies.in/cdn/shop/files/So_Sweet_Delicacies_Logo_2.png?height=70&v=1769929213"
              alt="So Sweet Delicacies"
              className="h-12 object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Authentic Indian sweets crafted with love and made purely vegan.
              Indulge in guilt-free sweetness, straight from our kitchen to your heart.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/sosweetdelicacies_by_kiran/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-rose-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'All Products', href: '#products' },
                { label: 'Privacy Policy', href: 'https://sosweetdelicacies.in/policies/privacy-policy' },
                { label: 'Shipping Policy', href: 'https://sosweetdelicacies.in/policies/shipping-policy' },
                { label: 'Refund Policy', href: 'https://sosweetdelicacies.in/policies/refund-policy' },
                { label: 'Terms of Service', href: 'https://sosweetdelicacies.in/policies/terms-of-service' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <Instagram size={15} className="mt-0.5 text-rose-400 shrink-0" />
                <a
                  href="https://www.instagram.com/sosweetdelicacies_by_kiran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  @sosweetdelicacies_by_kiran
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="mt-0.5 text-emerald-400 shrink-0" />
                <span>India</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MessageCircle size={15} className="mt-0.5 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/919871094395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  +91 98710 94395
                </a>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-emerald-900/40 rounded-xl border border-emerald-800/50">
              <p className="text-emerald-300 text-sm font-medium mb-1">Order Now</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Reach out to us on Instagram to place your order. Fresh sweets made daily!
              </p>
              <a
                href="https://www.instagram.com/sosweetdelicacies_by_kiran/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors"
              >
                <Instagram size={13} />
                Message on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; 2026{' '}
            <a
              href="https://sosweetdelicacies.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              So Sweet Delicacies
            </a>
            . All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={11} className="text-rose-400 fill-rose-400" /> for sweet lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
