'use client'
import AboutSection from "@/components/aboutsection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import ImpactStories from "@/components/impactStories";
import Navbar from "@/components/Navbar";
import PetAdoptionCarousel from "@/components/petAdoptionCarousel";
import VolunteerForm from "@/components/volunteerForm";

const App = () => {
  return (
    <div className="min-h-screen bg-dark-bg font-poppins text-light-text overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VolunteerForm />
      <ImpactStories />
      <PetAdoptionCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;