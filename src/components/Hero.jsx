import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AuroraBackground from './AuroraBackground';
import GradientText from './GradientText';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20 overflow-hidden"
    >
      {/* Aurora Background */}
      <AuroraBackground />

      <div className="container-custom py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
                {t('hero.title')}
                <br />
                <GradientText className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  {t('hero.titleHighlight')}
                </GradientText>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-4"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                onClick={scrollToContact}
                className="btn-primary"
                magneticStrength={0.5}
                magneticRange={150}
              >
                {t('hero.cta')}
              </MagneticButton>
              <MagneticButton
                onClick={scrollToPortfolio}
                className="btn-secondary"
                magneticStrength={0.5}
                magneticRange={150}
              >
                {t('hero.ctaSecondary')}
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circles */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="#FF0000"
                  opacity="0.1"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.circle
                  cx="250"
                  cy="250"
                  r="150"
                  fill="#FF0000"
                  opacity="0.2"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Computer/Monitor illustration */}
                <g transform="translate(125, 125)">
                  {/* Monitor */}
                  <rect
                    x="0"
                    y="0"
                    width="250"
                    height="180"
                    rx="10"
                    fill="#1F2937"
                    stroke="#FF0000"
                    strokeWidth="3"
                  />

                  {/* Screen */}
                  <rect
                    x="10"
                    y="10"
                    width="230"
                    height="140"
                    rx="5"
                    fill="#0F172A"
                  />

                  {/* Code lines */}
                  <motion.rect
                    x="20"
                    y="25"
                    width="120"
                    height="8"
                    rx="4"
                    fill="#FF0000"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.rect
                    x="20"
                    y="45"
                    width="180"
                    height="8"
                    rx="4"
                    fill="#0066CC"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  />
                  <motion.rect
                    x="20"
                    y="65"
                    width="140"
                    height="8"
                    rx="4"
                    fill="#10B981"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                  />
                  <motion.rect
                    x="20"
                    y="85"
                    width="160"
                    height="8"
                    rx="4"
                    fill="#F59E0B"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
                  />

                  {/* Stand */}
                  <rect x="100" y="180" width="50" height="40" fill="#1F2937" />
                  <rect x="70" y="220" width="110" height="10" rx="5" fill="#1F2937" />
                </g>

                {/* Floating elements */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="#FF0000"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.circle
                  cx="400"
                  cy="150"
                  r="20"
                  fill="#0066CC"
                  animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle
                  cx="80"
                  cy="400"
                  r="18"
                  fill="#10B981"
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                  }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                />
              </svg>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-swiss-red/5 to-tom-blue/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
