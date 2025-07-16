import { Flower2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo and brand */}
          <div className="mb-8">
            <Flower2 className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">HADAD</h3>
            <p className="text-white/80 italic">
              "Crafted with care, rooted in bloom."
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            <div className="w-16 h-px bg-secondary"></div>
            <Flower2 className="w-5 h-5 text-secondary" />
            <div className="w-16 h-px bg-secondary"></div>
          </div>

          {/* Copyright and establishment */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-white/70">
            <div>© HADAD 1992</div>
            <div className="hidden sm:block">•</div>
            <div>Every Petals in Perfect Bloom</div>
          </div>

          {/* Final decorative element */}
          <div className="mt-8 flex justify-center space-x-1">
            <div className="w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-floral-pink rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-1 h-1 bg-floral-blue rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;