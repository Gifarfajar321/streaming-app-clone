import QuestionSection from "../fragments/QuestionSection";
import AuthLayout from "../layout/AuthLayout";

const QuestionSectionPage = () => {
  return (
    <>
      <section className="py-10 bg-black">
        <AuthLayout>
          <QuestionSection />
        </AuthLayout>
      </section>
    </>
  );
};

export default QuestionSectionPage;
