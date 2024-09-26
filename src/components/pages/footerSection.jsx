import FooterSection from "../fragments/FooterSection";
import AuthLayout from "../layout/AuthLayout";

const FooterSectionPage = () => {
  return (
    <>
      <footer className="py-10 bg-black">
        <AuthLayout>
          <FooterSection />
        </AuthLayout>
      </footer>
    </>
  );
};

export default FooterSectionPage;
