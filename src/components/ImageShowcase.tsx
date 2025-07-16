import { useEffect } from 'react';

const ImageShowcase = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/lovable-uploads/5fe1ea91-342f-41c9-9da7-f7be4249a390.png",
      alt: "Blue and pink gypsophila bouquet in rustic basket",
      overlay: "Crafted Since 1992",
      className: "col-span-2 row-span-2"
    },
    {
      src: "/lovable-uploads/6e4641a3-68db-46be-ad2d-8fa645aec357.png",
      alt: "Pastel pink, blue and white gypsophila bundles",
      overlay: "Nature's Palette",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/lovable-uploads/369d7715-ad19-46b4-bac7-6f04513f22f5.png",
      alt: "Full spectrum gypsophila in cascading layers",
      overlay: "Artist's Touch",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/lovable-uploads/a2a80be0-5288-4ab6-9ed6-662754524d9b.png",
      alt: "Elegant white gypsophila bouquet wrapped in newspaper",
      overlay: "Timeless Colors",
      className: "col-span-1 row-span-2"
    },
    {
      src: "/lovable-uploads/e7481f34-03d5-41e4-9a23-0e9d201f0211.png",
      alt: "Handmade beauty with deep purples and vibrant blues",
      overlay: "Handmade Beauty",
      className: "col-span-2 row-span-1"
    }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-shadow-elegant">
            Artistry in Every Petal
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-secondary w-20"></div>
            <div className="w-3 h-3 bg-secondary rounded-full mx-4"></div>
            <div className="h-px bg-secondary w-20"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            30 years of a Family-Owned Business that Committed to Beauty, Quality, and Heartfelt Service
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In our place, craftsmanship meets care. <br /> We treat every bouquet as if it's made for our own family - because it is.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 auto-rows-[280px] sm:auto-rows-[250px] md:auto-rows-[220px]">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`scroll-animate opacity-0 relative group overflow-hidden rounded-2xl ${image.className} hover-lift`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {image.overlay}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-floral-pink rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-floral-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;