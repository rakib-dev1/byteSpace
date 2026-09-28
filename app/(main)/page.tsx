import { HeroSection } from "@/components/home/HeroSection";
import { LogoStrip } from "@/components/home/LogoStrip";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CreatorBannerSection } from "@/components/home/CreatorBannerSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <FeaturedCourses />
      <CategoriesSection />
      <FeaturesSection />
      <CreatorBannerSection />
      <TestimonialsSection />
    </>
  );
}
