import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AuroraBackground from './AuroraBackground';
import GradientText from './GradientText';
import MagneticButton from './MagneticButton';
import Scene3D from './Scene3D';

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

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
