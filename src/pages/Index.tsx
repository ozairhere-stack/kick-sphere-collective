import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsSection from "@/components/BrandsSection";
import ReviewsSection from "@/components/ReviewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <CategoriesSection />
      <BrandsSection />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
