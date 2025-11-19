import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = t('about.skillsList', { returnObjects: true });

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title dark:text-white">{t('about.title')}</h2>
          <p className="section-subtitle dark:text-gray-300">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-swiss-red via-red-600 to-swiss-dark rounded-3xl p-8 shadow-2xl overflow-hidden relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />

              <svg viewBox="0 0 400 400" className="w-full h-auto relative z-10">
                {/* Background circles */}
                <defs>
                  <radialGradient id="glow1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="200" cy="200" r="180" fill="url(#glow1)" />
                <circle cx="200" cy="200" r="140" fill="white" opacity="0.05" />

                {/* Person */}
                <g transform="translate(200, 180)">
                  {/* Head */}
                  <circle cx="0" cy="-60" r="40" fill="#FCD34D" />

                  {/* Face details */}
                  <circle cx="-12" cy="-65" r="4" fill="#1F2937" />
                  <circle cx="12" cy="-65" r="4" fill="#1F2937" />
                  <path d="M -8 -50 Q 0 -45 8 -50" stroke="#1F2937" strokeWidth="2" fill="none" />

                  {/* Body */}
                  <rect x="-35" y="-20" width="70" height="80" rx="10" fill="white" />

                  {/* TomWeb logo on shirt */}
                  <foreignObject x="-15" y="-5" width="30" height="30">
                    <img
                      src="/Favicon.png"
                      alt="TomWeb"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </foreignObject>

                  {/* Arms */}
                  <rect x="-52" y="-10" width="17" height="65" rx="8" fill="white" />
                  <rect x="35" y="-10" width="17" height="65" rx="8" fill="white" />

                  {/* Hands on keyboard */}
                  <circle cx="-40" cy="55" r="8" fill="#FCD34D" />
                  <circle cx="40" cy="55" r="8" fill="#FCD34D" />

                  {/* Laptop */}
                  <g transform="translate(0, 40)">
                    {/* Laptop base */}
                    <rect x="-55" y="45" width="110" height="8" rx="2" fill="#1F2937" />

                    {/* Laptop screen */}
                    <rect x="-45" y="-5" width="90" height="55" rx="5" fill="#1F2937" />
                    <rect x="-40" y="0" width="80" height="45" rx="3" fill="#0F172A" />

                    {/* Code on screen with better styling */}
                    <motion.rect
                      x="-32"
                      y="8"
                      width="35"
                      height="4"
                      rx="2"
                      fill="#FF0000"
                      animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.rect
                      x="-32"
                      y="16"
                      width="55"
                      height="4"
                      rx="2"
                      fill="#0066CC"
                      animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                    />
                    <motion.rect
                      x="-32"
                      y="24"
                      width="42"
                      height="4"
                      rx="2"
                      fill="#10B981"
                      animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                    />
                    <motion.rect
                      x="-32"
                      y="32"
                      width="48"
                      height="4"
                      rx="2"
                      fill="#F59E0B"
                      animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
                    />

                    {/* Cursor */}
                    <motion.rect
                      x="18"
                      y="32"
                      width="2"
                      height="4"
                      fill="white"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </g>
                </g>

                {/* Swiss flag element - enhanced */}
                <motion.g
                  transform="translate(320, 80)"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <rect width="55" height="55" fill="#FF0000" rx="8" />
                  <rect x="21" y="10" width="13" height="35" fill="white" />
                  <rect x="10" y="21" width="35" height="13" fill="white" />
                </motion.g>

                {/* Floating tech icons */}
                <motion.g
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <circle cx="70" cy="90" r="28" fill="white" opacity="0.95" />
                  <text x="70" y="100" fontSize="26" textAnchor="middle">💻</text>
                </motion.g>

                <motion.g
                  animate={{ y: [0, -18, 0], x: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                >
                  <circle cx="330" cy="290" r="28" fill="white" opacity="0.95" />
                  <text x="330" y="300" fontSize="26" textAnchor="middle">🚀</text>
                </motion.g>

                <motion.g
                  animate={{ y: [0, -12, 0], x: [0, 3, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity }}
                >
                  <circle cx="50" cy="320" r="28" fill="white" opacity="0.95" />
                  <text x="50" y="330" fontSize="26" textAnchor="middle">⚡</text>
                </motion.g>

                <motion.g
                  animate={{ y: [0, -10, 0], x: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <circle cx="340" cy="150" r="25" fill="white" opacity="0.95" />
                  <text x="340" y="159" fontSize="24" textAnchor="middle">🎨</text>
                </motion.g>
              </svg>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
              >
                {t('about.text1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
              >
                {t('about.text2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
              >
                {t('about.text3')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {t('about.skills')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-600"
                    >
                      <div className="w-2 h-2 bg-swiss-red rounded-full flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-100 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
