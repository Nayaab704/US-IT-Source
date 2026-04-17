import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </>
  );
}

export default Home;