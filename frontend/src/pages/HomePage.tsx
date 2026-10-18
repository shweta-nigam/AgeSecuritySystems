
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../features/home/HeroSection";
import FeaturesSection from "../features/home/FeaturesSection";
import ServicesSection from "../features/home/ServicesSection";
import CTASection from "../features/home/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080d18] text-slate-100">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
