import './i18n';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };



  return (
    <ThemeProvider>
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative z-0"
      >
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <QuoteForm />
        <Contact />
        <Footer />
        <ScrollToTop />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
