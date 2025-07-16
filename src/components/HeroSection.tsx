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

      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Logo */}
        <div className="animate-on-load opacity-0 mb-8">
          <img 
            src="/lovable-uploads/4fbc8173-4044-4afb-a21c-ce94115fd854.png" 
            alt="HADAD - Every Petals in Perfect Bloom"
            className="h-32 mx-auto mb-6 hover-lift"
          />
        </div>

        {/* Main title */}
        <div className="animate-on-load opacity-0 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-shadow-elegant mb-4">
            HADAD
          </h1>
        </div>

        {/* Established section */}
        <div className="animate-on-load opacity-0">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Over 30 Years of Growing Flowers with Heart
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three decades of passion, dedication, and blooming excellence - cultivated with care and rooted in love.
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