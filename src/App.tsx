import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProductExperience from '@/components/ProductExperience';
import CommandPalette from '@/components/CommandPalette';
import { useTheme } from '@/hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProductExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <CommandPalette theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
