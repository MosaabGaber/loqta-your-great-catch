import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedDeals from "@/components/FeaturedDeals";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import RecentlyAdded from "@/components/RecentlyAdded";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturedDeals />
    <HowItWorks />
    <Categories />
    <RecentlyAdded />
    <TrustSection />
    <Footer />
  </div>
);

export default Index;
