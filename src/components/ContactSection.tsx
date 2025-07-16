import { Mail, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-floral-pink animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-floral-blue animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Flower2 className="w-12 h-12 text-white mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-elegant">
            📬 Let's Bloom Together
          </h2>
        </div>

        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to bring the beauty of HADAD's handcrafted gypsophila to your special moments? 
          We're here to help you create something extraordinary.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-xl text-white font-medium">Get in touch:</span>
            </div>
            
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <a href="mailto:hadadfarm5@gmail.com" className="flex items-center space-x-2">
                <span className="text-lg font-semibold">hadadfarm5@gmail.com</span>
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/80 text-sm italic">
              "Every inquiry is the beginning of a beautiful creation"
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-floral-pink rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-floral-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;