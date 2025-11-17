import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            onClick={(e) => scrollToSection(e, '#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo className="w-12 h-12" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              Tom<span className="text-swiss-red">Web</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 dark:text-gray-200 hover:text-swiss-red dark:hover:text-swiss-red transition-colors duration-200 font-medium"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Language Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  i18n.language === 'fr'
                    ? 'bg-swiss-red text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  i18n.language === 'en'
                    ? 'bg-swiss-red text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-gray-800 dark:bg-white transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-gray-800 dark:bg-white transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-gray-800 dark:bg-white transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 dark:text-gray-200 hover:text-swiss-red transition-colors duration-200 font-medium py-2"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}

              {/* Mobile Dark Mode Toggle */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Mode sombre</span>
                <DarkModeToggle />
              </div>

              {/* Mobile Language Selector */}
              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`flex-1 px-3 py-2 rounded-md font-medium transition-all ${
                    i18n.language === 'fr'
                      ? 'bg-swiss-red text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex-1 px-3 py-2 rounded-md font-medium transition-all ${
                    i18n.language === 'en'
                      ? 'bg-swiss-red text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
