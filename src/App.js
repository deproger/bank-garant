
import { About } from "./components/about/about";
import { Calculator } from "./components/calculator/calculator";
import { Footer } from "./components/footer/footer";
import { Garant } from "./components/garant/garant";
import { Quarantee } from "./components/guarantee/guarantee";
import { Header } from "./components/header/header";
import { Section } from "./components/main/section";
import { Otzivi } from "./components/otzivi/otzivi";
import { SectionMain } from "./components/section/sectionMain";
import { Wrapper } from "./components/wrapper";
import { Zaivka } from "./components/zaivka/zaivka";



function App () {
  return (
    <Wrapper>
      <Header />
      <Section />
      <Garant />
      <SectionMain />
      <Quarantee />
      <Calculator />
      <About />
      <Otzivi />
      <Zaivka />
      <Footer />
    </Wrapper>

            
  );
}

export default App;

