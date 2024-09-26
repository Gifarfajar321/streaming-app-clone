import AboutSection from "../fragments/AboutSection";
import AuthLayout from "../layout/AuthLayout";

const AboutSectionPage = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-gradient-to-t from-red-700 to-black">
        <div className="bottom-0 left-0 w-full h-full bg-gradient-to-b from-red-700 to-transparent clip-curve-top pt-1">
          <div className="relative w-full min-h-screen bg-gradient-to-t from-red-700 to-transparent">
            <div className="bottom-0 left-0 w-full h-full bg-gradient-to-b from-black to-black clip-curve-top pt-14 pb-14">
              <AuthLayout>
                <AboutSection />
              </AuthLayout>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionPage;
