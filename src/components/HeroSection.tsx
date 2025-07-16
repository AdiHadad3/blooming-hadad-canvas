import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in-up');
        }, index * 200);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-floral-pink animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-floral-blue animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Logo */}
        <div className="animate-on-load opacity-0 mb-8">
          <img 
            src="/lovable-uploads/4fbc8173-4044-4afb-a21c-ce94115fd854.png" 
            alt="HADAD - Every Petals in Perfect Bloom"
            className="h-32 mx-auto mb-6 hover-lift"
          />
        </div>

        {/* Main tagline */}
        <div className="animate-on-load opacity-0 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-shadow-elegant mb-4">
            HADAD
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-secondary w-16 mr-4"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              EVERY PETALS IN PERFECT BLOOM
            </p>
            <div className="h-px bg-secondary w-16 ml-4"></div>
          </div>
        </div>

        {/* Established badge */}
        <div className="animate-on-load opacity-0">
          <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent rounded-full px-8 py-3">
            <p className="text-primary font-medium">
              Est. 1992 – Over 30 Years of Timeless Floral Art
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;