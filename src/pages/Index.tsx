import HeroSection from '@/components/HeroSection';
import ImageShowcase from '@/components/ImageShowcase';
import LegacySection from '@/components/LegacySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImageShowcase />
      <LegacySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
