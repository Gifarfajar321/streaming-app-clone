import JoinSection from "../fragments/JoinSection";
import AuthLayout from "../layout/AuthLayout";

const JoinSectionPage = () => {
  return (
    <>
      <section className="py-10 bg-black">
        <AuthLayout>
          <JoinSection />
        </AuthLayout>
      </section>
    </>
  );
};

export default JoinSectionPage;
