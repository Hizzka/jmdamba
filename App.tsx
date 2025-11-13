import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Achievements } from "./components/Achievements";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Achievements />
          <About />
          <Services />
          <Journey />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
