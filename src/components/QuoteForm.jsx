import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const QuoteForm = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'showcase',
    budget: '',
    timeline: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mdkyrqbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          subject: `Demande de devis - ${formState.projectType}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: 'showcase',
          budget: '',
          timeline: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-gray-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title dark:text-white">{t('quote.title')}</h2>
          <p className="section-subtitle dark:text-gray-300">
            {t('quote.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {t('quote.form.nameRequired')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {t('quote.form.emailRequired')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {t('quote.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {t('quote.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('quote.form.projectTypeRequired')}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                >
                  <option value="showcase">{t('quote.form.projectTypes.showcase')}</option>
                  <option value="custom">{t('quote.form.projectTypes.custom')}</option>
                  <option value="redesign">{t('quote.form.projectTypes.redesign')}</option>
                  <option value="maintenance">{t('quote.form.projectTypes.maintenance')}</option>
                  <option value="other">{t('quote.form.projectTypes.other')}</option>
                </select>
              </div>

              {/* Row 4: Budget and Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {t('quote.form.budget')}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                  >
                    <option value="">{t('quote.form.budgetOptions.select')}</option>
                    <option value="< 1000 CHF">{t('quote.form.budgetOptions.low')}</option>
                    <option value="1000-3000 CHF">{t('quote.form.budgetOptions.medium')}</option>
                    <option value="3000-5000 CHF">{t('quote.form.budgetOptions.high')}</option>
                    <option value="5000-10000 CHF">{t('quote.form.budgetOptions.veryHigh')}</option>
                    <option value="> 10000 CHF">{t('quote.form.budgetOptions.enterprise')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {t('quote.form.timeline')}
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formState.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all"
                  >
                    <option value="">{t('quote.form.timelineOptions.select')}</option>
                    <option value="urgent">{t('quote.form.timelineOptions.urgent')}</option>
                    <option value="1-2 mois">{t('quote.form.timelineOptions.short')}</option>
                    <option value="2-3 mois">{t('quote.form.timelineOptions.medium')}</option>
                    <option value="flexible">{t('quote.form.timelineOptions.flexible')}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('quote.form.messageRequired')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder={t('quote.form.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-swiss-red focus:ring-2 focus:ring-swiss-red/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full btn-primary ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'sending' ? t('quote.form.sending') : t('quote.form.submit')}
                </button>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg"
                >
                  ✅ {t('quote.form.success')}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg"
                >
                  ❌ {t('quote.form.error')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
