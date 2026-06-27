import { MessageCircle } from 'lucide-react';

const PHONE = '919871094395';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
      <span className="absolute -top-9 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        +91 98710 94395
      </span>
    </a>
  );
}
