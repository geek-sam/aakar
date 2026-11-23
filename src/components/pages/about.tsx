import AboutIntroSection from "../sections/About/AboutIntro";
import CoreValuesSection from "../sections/Common/CoreValues";
import FaqSection from "../sections/Common/FaqSection";
import PageTitle from "../sections/Common/PageTitle";
import TestimonialsSection from "../sections/Common/TestimonialsSection";
import WhyChooseUs from "../sections/Home/WhyChooseUs";

const AboutPage = () => {
  return (
    <div>
      <PageTitle title="About Us" backgroundImage="/images/about-main.jpg" />
      <AboutIntroSection />
      <CoreValuesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};

export default AboutPage;
