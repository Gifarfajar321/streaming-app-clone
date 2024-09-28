import background from "../../assets/Image/netflix-img/images/netflix-background-.png";
import HeroSection from "../fragments/HeroSection";
import AuthLayout from "../layout/AuthLayout";

const HeroSectionPage = () => {
  return (
    <>
      <section
        className="pt-28 pb-32 bg-black bg-cover bg-center relative after:content-[' '] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black after:opacity-80 after:z-0 lg:min-h-screnn"
        style={{ backgroundImage: `url(${background})` }}
      >
        <AuthLayout className="relative z-10">
          <HeroSection />
        </AuthLayout>
      </section>
    </>
  );
};

export default HeroSectionPage;
