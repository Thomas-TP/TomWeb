import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-2">
          {/* Logo & Description */}
          <div>
            <div className="mb-3">
              <a href="/" aria-label="Retour à l'accueil">
                <img
                  src="/Logo-dark.png"
                  alt="TomWeb Logo"
                  className="h-32 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 whitespace-nowrap">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Quick Links - Two Columns */}
          <div>
            <h3 className="text-lg font-bold mb-3">Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-1 gap-y-1">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">{t('nav.contact')}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:thomas@prudhomme.li"
                  className="hover:text-white transition-colors"
                >
                  thomas@prudhomme.li
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Suisse 🇨🇭</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a
                  href="https://thomastp.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  thomastp.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-sm">
            © {currentYear} TomWeb. {t('footer.rights')}
          </p>
          <p className="text-gray-400 text-sm">
            {t('footer.madeIn')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
