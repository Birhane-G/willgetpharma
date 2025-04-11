import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import WhyChooseUs from "@/components/why-choose-us"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
    </div>
  )
}
