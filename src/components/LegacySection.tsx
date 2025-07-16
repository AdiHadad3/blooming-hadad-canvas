import { Flower2 } from 'lucide-react';

const LegacySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-floral-white to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Flower2 className="w-12 h-12 text-secondary mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-shadow-elegant">
            🌿 Rooted in Tradition – Blooming Since 1992
          </h2>
        </div>

        <div className="relative">
          {/* Decorative quote marks */}
          <div className="absolute -top-6 -left-6 text-6xl text-secondary/20 font-serif">"</div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-secondary/20 font-serif">"</div>
          
          <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic max-w-3xl mx-auto relative z-10">
            For over 30 years, HADAD has been cultivating beauty through vibrant, hand-dyed gypsophila. 
            Each piece is a tribute to tradition, passion, and natural elegance. From our humble beginnings 
            to becoming masters of floral artistry, we continue to transform nature's delicate gifts into 
            lasting memories.
          </blockquote>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="w-px h-16 bg-border"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Unique Creations</div>
          </div>
          <div className="w-px h-16 bg-border"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">1992</div>
            <div className="text-sm text-muted-foreground">Established</div>
          </div>
        </div>

        {/* Decorative floral divider */}
        <div className="flex justify-center items-center mt-16 space-x-4">
          <div className="w-8 h-px bg-secondary"></div>
          <Flower2 className="w-6 h-6 text-secondary" />
          <div className="w-8 h-px bg-secondary"></div>
          <Flower2 className="w-4 h-4 text-floral-pink" />
          <div className="w-8 h-px bg-secondary"></div>
          <Flower2 className="w-6 h-6 text-secondary" />
          <div className="w-8 h-px bg-secondary"></div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;