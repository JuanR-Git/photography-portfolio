import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <FeaturedPortfolio />
      <CTASection />
    </>
  );
}
