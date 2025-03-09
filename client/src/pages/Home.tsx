import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MembershipSection from "@/components/sections/MembershipSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TrainersSection from "@/components/sections/TrainersSection";
import ClassesSection from "@/components/sections/ClassesSection";
import GallerySection from "@/components/sections/GallerySection";
import HoursLocationSection from "@/components/sections/HoursLocationSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <div className="font-body text-dark bg-light">
      <Header />
      <main>
        <HeroSection />
        <MembershipSection />
        <FeaturesSection />
        <TrainersSection />
        <ClassesSection />
        <GallerySection />
        <HoursLocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
