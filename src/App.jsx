import './i18n';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import SplashCursor from './components/SplashCursor';
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Ensure minimum loading time for smooth experience
    const minLoadingTime = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(minLoadingTime);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!isLoading && <SplashCursor />}

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
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
      )}
    </ThemeProvider>
  );
}

export default App;
