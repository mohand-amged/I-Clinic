import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSolutionSection from "@/components/problem-solution-section";
import ServicesSection from "@/components/services-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import TestimonialsSection from "@/components/testimonials-section";
import DoctorSection from "@/components/doctor-section";
import BookingContactSection from "@/components/booking-contact-section";
import Footer from "@/components/footer";
import ThemeToggle from "@/components/theme-toggle";
import LanguageToggle from "@/components/language-toggle";
import StickyCTA from "@/components/sticky-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Language Toggle */}
      <LanguageToggle />
      
      {/* Sticky CTA Button */}
      <StickyCTA />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Problem → Solution Section */}
        <ProblemSolutionSection />
        
        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* Why Choose Us Section */}
        <WhyChooseUsSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Doctor/Team Section */}
        <section id="doctor">
          <DoctorSection />
        </section>
        
        {/* Booking/Contact Section */}
        <BookingContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
