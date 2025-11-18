import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MagneticButton from './MagneticButton';

const Portfolio = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title dark:text-white">{t('portfolio.title')}</h2>
          <p className="section-subtitle dark:text-gray-300">{t('portfolio.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-12"
        >
          <div className="bg-gradient-to-br from-swiss-red to-swiss-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold mb-4 text-center"
              >
                thomastp.me
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl mb-8 text-center text-white/90"
              >
                {t('portfolio.description')}
              </motion.p>

              {/* Portfolio preview grid - 3 screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                {/* Desktop Screenshot */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <img
                      src="/portfolio-desktop.png"
                      alt="Portfolio Desktop"
                      loading="lazy"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-white/80">Desktop</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tablet Screenshot */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <img
                      src="/portfolio-tablet.png"
                      alt="Portfolio Tablet"
                      loading="lazy"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-white/80">Tablet</p>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Screenshot */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 shadow-lg">
                    <img
                      src="/portfolio-mobile.png"
                      alt="Portfolio Mobile"
                      loading="lazy"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-white/80">Mobile</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="relative py-8 my-8"
              >
                {/* Floating Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  {/* Swiss Theme */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/20 transition-all"
                  >
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      {/* Swiss Mountain */}
                      <path d="M8 40L18 20L24 28L30 20L40 40H8Z" fill="white" opacity="0.9"/>
                      <path d="M12 40L20 26L24 32L28 26L36 40H12Z" fill="white" opacity="0.7"/>
                    </svg>
                    <span className="text-xs font-semibold text-white/80">Suisse</span>
                  </motion.div>

                  {/* Coding Theme */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/20 transition-all"
                  >
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="white">
                      {/* Code brackets */}
                      <path d="M16 12L6 24L16 36" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M32 12L42 24L32 36" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M28 10L20 38" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xs font-semibold text-white/80">Code</span>
                  </motion.div>

                  {/* Education Theme */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/20 transition-all"
                  >
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="white">
                      {/* Graduation cap */}
                      <path d="M24 10L4 20L24 30L44 20L24 10Z" fill="white" opacity="0.9"/>
                      <path d="M24 30V38M18 34V42L24 44L30 42V34" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                    <span className="text-xs font-semibold text-white/80">Études</span>
                  </motion.div>

                  {/* Web Dev Theme */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.08, 1]
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/20 transition-all"
                  >
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="white">
                      {/* Browser window */}
                      <rect x="6" y="10" width="36" height="28" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                      <line x1="6" y1="16" x2="42" y2="16" stroke="white" strokeWidth="2"/>
                      <circle cx="11" cy="13" r="1.5" fill="white"/>
                      <circle cx="16" cy="13" r="1.5" fill="white"/>
                      <circle cx="21" cy="13" r="1.5" fill="white"/>
                      <path d="M15 24L20 28L15 32M25 24H33" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xs font-semibold text-white/80">Web</span>
                  </motion.div>
                </div>

                {/* Floating Particles Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Stats or Tags */}
                <div className="flex flex-wrap justify-center gap-3 relative z-10">
                  {['React', 'TypeScript', 'Tailwind', 'Vite', 'CFC IT', 'Geneva'].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold hover:bg-white/30 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Social Links - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex gap-4"
                >
                  {/* Linktree */}
                  <a
                    href="https://linktr.ee/Thomas_IT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    title="Linktree"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c0 .486.405.89.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.728 0 1.213-.729.89-1.377z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/41763764551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    title="WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Thomas-TP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/thomas-p-6850772aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </motion.div>

                {/* Main CTA Button - Center/Right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <MagneticButton
                    onClick={() => window.open('https://thomastp.me', '_blank')}
                    className="inline-flex items-center gap-3 bg-white text-swiss-red font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    magneticStrength={0.5}
                    magneticRange={150}
                  >
                    {t('portfolio.cta')}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
