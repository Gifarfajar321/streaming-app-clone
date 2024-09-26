import Header from "./components/layout/Header";
import AboutSectionPage from "./components/pages/aboutSection";
import FooterSectionPage from "./components/pages/footerSection";
import HeroSectionPage from "./components/pages/heroSection";
import JoinSectionPage from "./components/pages/joinSection";
import QuestionSectionPage from "./components/pages/questionSection";

const App = () => {
  return (
    <>
      <Header />
      <HeroSectionPage />
      <AboutSectionPage />
      <QuestionSectionPage />
      <JoinSectionPage />
      <FooterSectionPage />
    </>
  );
};

export default App;
