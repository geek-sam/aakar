import GallerySection from "../sections/Common/GallerySection";
import PartnersSection from "../sections/Common/PartnersSection";
import TestimonialsSection from "../sections/Common/TestimonialsSection";
import AboutSection from "../sections/Home/AboutSection";
import BlogSection from "../sections/Home/BlogSection";
import HomeHero from "../sections/Home/HomeHero";
import HowWeWork from "../sections/Home/HowWeWork";
import ProjectsSection from "../sections/Home/ProjectsSection";
import WhyChooseUs from "../sections/Home/WhyChooseUs";

const Homepage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <HomeHero />

      {/* About */}
      <AboutSection />

      {/* Process */}
      <HowWeWork />

      {/* Projects */}
      <ProjectsSection />
      {/* Services */}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Partners */}
      {/* <PartnersSection /> */}

      {/* Blogs */}
      <BlogSection />

      {/* CTA */}
    </>
  );
};

export default Homepage;
