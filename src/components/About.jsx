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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            <div className="bg-gradient-to-br from-swiss-red to-swiss-dark rounded-3xl p-8 shadow-2xl">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Developer illustration */}
                <circle cx="200" cy="200" r="180" fill="white" opacity="0.1" />

                {/* Person */}
                <g transform="translate(200, 180)">
                  {/* Head */}
                  <circle cx="0" cy="-60" r="40" fill="#FCD34D" />

                  {/* Body */}
                  <rect x="-35" y="-20" width="70" height="80" rx="10" fill="white" />

                  {/* Arms */}
                  <rect x="-50" y="-10" width="15" height="60" rx="7" fill="white" />
                  <rect x="35" y="-10" width="15" height="60" rx="7" fill="white" />

                  {/* Laptop */}
                  <g transform="translate(0, 40)">
                    <rect x="-40" y="0" width="80" height="50" rx="5" fill="#1F2937" />
                    <rect x="-35" y="5" width="70" height="35" rx="3" fill="#0F172A" />

                    {/* Code on screen */}
                    <motion.rect
                      x="-25"
                      y="12"
                      width="30"
                      height="3"
                      fill="#FF0000"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.rect
                      x="-25"
                      y="20"
                      width="45"
                      height="3"
                      fill="#0066CC"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                    />
                    <motion.rect
                      x="-25"
                      y="28"
                      width="35"
                      height="3"
                      fill="#10B981"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity }}
                    />
                  </g>
                </g>

                {/* Swiss flag element */}
                <g transform="translate(320, 80)">
                  <rect width="50" height="50" fill="#FF0000" rx="5" />
                  <rect x="19" y="10" width="12" height="30" fill="white" />
                  <rect x="10" y="19" width="30" height="12" fill="white" />
                </g>

                {/* Floating icons */}
                <motion.g
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <circle cx="80" cy="100" r="25" fill="white" opacity="0.9" />
                  <text x="80" y="110" fontSize="24" textAnchor="middle">💻</text>
                </motion.g>

                <motion.g
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <circle cx="320" cy="280" r="25" fill="white" opacity="0.9" />
                  <text x="320" y="290" fontSize="24" textAnchor="middle">🚀</text>
                </motion.g>

                <motion.g
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity }}
                >
                  <circle cx="60" cy="320" r="25" fill="white" opacity="0.9" />
                  <text x="60" y="330" fontSize="24" textAnchor="middle">⚡</text>
                </motion.g>
              </svg>
            </div>
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
                className="text-lg text-gray-700 leading-relaxed"
              >
                {t('about.text1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {t('about.text2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {t('about.text3')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('about.skills')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="w-2 h-2 bg-swiss-red rounded-full" />
                      <span className="text-gray-700 font-medium">{skill}</span>
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
