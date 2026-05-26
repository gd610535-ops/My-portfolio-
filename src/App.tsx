import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WorkSamples } from './components/WorkSamples';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkSamples />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
