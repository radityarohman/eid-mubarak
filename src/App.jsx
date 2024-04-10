import Hero from "./section/Hero";
import Intro from "./section/Intro";
import Moon from "./section/Moon";
import Quotes from "./section/About";
import Footer from "./section/Footer";

const App = () => {
  return (
    <main className="relative font-inter overflow-hidden">
      <section>
        <Intro />
      </section>
      <section>
        <Moon />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Quotes />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
