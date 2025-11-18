import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'À propos',
        contact: 'Contact',
      },
      hero: {
        title: 'Créons ensemble votre',
        titleHighlight: 'présence digitale',
        subtitle: 'TomWeb - Votre partenaire pour des sites web modernes et professionnels',
        description: 'Spécialisé dans la création de sites vitrines dynamiques pour les PME suisses. En apprentissage CFC informaticien, je mets mon expertise au service de votre projet.',
        cta: 'Démarrer un projet',
        ctaSecondary: 'Voir mes réalisations',
      },
      services: {
        title: 'Mes Services',
        subtitle: 'Des solutions adaptées à vos besoins',
        website: {
          title: 'Création de Sites Vitrines',
          description: 'Sites web modernes, responsives et optimisés pour présenter votre activité professionnellement.',
        },
        support: {
          title: 'Support & Maintenance',
          description: 'Accompagnement continu pour garantir le bon fonctionnement et l\'évolution de votre site.',
        },
        responsive: {
          title: 'Design Responsive',
          description: 'Sites adaptés à tous les écrans : mobile, tablette et ordinateur pour une expérience optimale.',
        },
        seo: {
          title: 'Optimisation SEO',
          description: 'Optimisation pour les moteurs de recherche afin d\'améliorer votre visibilité en ligne.',
        },
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Découvrez mes réalisations',
        description: 'Visitez mon portfolio complet pour voir mes projets et réalisations.',
        cta: 'Voir mon portfolio',
      },
      about: {
        title: 'À Propos',
        subtitle: 'Passionné par le développement web',
        text1: 'Actuellement en apprentissage CFC informaticien exploitation et infrastructure, je me spécialise dans la création de sites web modernes et performants.',
        text2: 'Mon objectif est d\'aider les petites entreprises suisses à développer leur présence en ligne avec des solutions web adaptées à leurs besoins et leur budget.',
        text3: 'Basé en Suisse, je combine formation technique et passion pour créer des sites qui font la différence.',
        skills: 'Compétences',
        skillsList: ['React & Technologies Modernes', 'Design Responsive', 'Support Client', 'Optimisation Performance'],
      },
      contact: {
        title: 'Contact',
        subtitle: 'Discutons de votre projet',
        description: 'Vous avez un projet en tête ? N\'hésitez pas à me contacter pour en discuter.',
        email: 'Email',
        emailCta: 'Cliquez pour m\'envoyer un email',
        whatsapp: 'WhatsApp',
        whatsappCta: 'Cliquez pour démarrer une conversation',
        location: 'Suisse 🇨🇭',
        form: {
          name: 'Nom',
          namePlaceholder: 'Votre nom',
          email: 'Email',
          emailPlaceholder: 'votre@email.com',
          message: 'Message',
          messagePlaceholder: 'Décrivez votre projet...',
          submit: 'Envoyer',
          sending: 'Envoi en cours...',
          success: 'Message envoyé avec succès !',
          error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
        },
      },
      quote: {
        title: 'Demande de Devis',
        subtitle: 'Obtenez une estimation gratuite pour votre projet',
        form: {
          name: 'Nom complet',
          nameRequired: 'Nom complet *',
          email: 'Email',
          emailRequired: 'Email *',
          phone: 'Téléphone',
          company: 'Entreprise',
          projectType: 'Type de projet',
          projectTypeRequired: 'Type de projet *',
          projectTypes: {
            showcase: 'Site Vitrine',
            custom: 'Application sur mesure',
            redesign: 'Refonte de site existant',
            maintenance: 'Maintenance/Support',
            other: 'Autre/Question',
          },
          budget: 'Budget estimé',
          budgetOptions: {
            select: 'Sélectionnez',
            low: '< 1000 CHF',
            medium: '1000-3000 CHF',
            high: '3000-5000 CHF',
            veryHigh: '5000-10000 CHF',
            enterprise: '> 10000 CHF',
          },
          timeline: 'Délai souhaité',
          timelineOptions: {
            select: 'Sélectionnez',
            urgent: 'Urgent (< 1 mois)',
            short: '1-2 mois',
            medium: '2-3 mois',
            flexible: 'Flexible',
          },
          message: 'Description du projet',
          messageRequired: 'Description du projet *',
          messagePlaceholder: 'Décrivez votre projet en détail...',
          submit: 'Demander un devis gratuit',
          sending: 'Envoi en cours...',
          success: 'Votre demande de devis a été envoyée avec succès ! Nous vous recontacterons rapidement.',
          error: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
        },
      },
      footer: {
        rights: 'Tous droits réservés.',
        madeIn: 'Fait avec ❤️ en Suisse',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        title: 'Let\'s build together your',
        titleHighlight: 'digital presence',
        subtitle: 'TomWeb - Your partner for modern and professional websites',
        description: 'Specialized in creating dynamic showcase websites for Swiss SMEs. As an IT apprentice, I put my expertise at the service of your project.',
        cta: 'Start a project',
        ctaSecondary: 'View my work',
      },
      services: {
        title: 'My Services',
        subtitle: 'Solutions tailored to your needs',
        website: {
          title: 'Website Creation',
          description: 'Modern, responsive and optimized websites to present your business professionally.',
        },
        support: {
          title: 'Support & Maintenance',
          description: 'Continuous support to ensure the smooth operation and evolution of your website.',
        },
        responsive: {
          title: 'Responsive Design',
          description: 'Websites adapted to all screens: mobile, tablet and computer for an optimal experience.',
        },
        seo: {
          title: 'SEO Optimization',
          description: 'Search engine optimization to improve your online visibility.',
        },
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Discover my work',
        description: 'Visit my complete portfolio to see my projects and achievements.',
        cta: 'View my portfolio',
      },
      about: {
        title: 'About Me',
        subtitle: 'Passionate about web development',
        text1: 'Currently in IT apprenticeship in system and infrastructure management, I specialize in creating modern and high-performance websites.',
        text2: 'My goal is to help Swiss small businesses develop their online presence with web solutions adapted to their needs and budget.',
        text3: 'Based in Switzerland, I combine technical training and passion to create websites that make a difference.',
        skills: 'Skills',
        skillsList: ['React & Modern Technologies', 'Responsive Design', 'Customer Support', 'Performance Optimization'],
      },
      contact: {
        title: 'Contact',
        subtitle: 'Let\'s discuss your project',
        description: 'Have a project in mind? Don\'t hesitate to contact me to discuss it.',
        email: 'Email',
        emailCta: 'Click to send me an email',
        whatsapp: 'WhatsApp',
        whatsappCta: 'Click to start a conversation',
        location: 'Switzerland 🇨🇭',
        form: {
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'Email',
          emailPlaceholder: 'your@email.com',
          message: 'Message',
          messagePlaceholder: 'Describe your project...',
          submit: 'Send',
          sending: 'Sending...',
          success: 'Message sent successfully!',
          error: 'Error sending message. Please try again.',
        },
      },
      quote: {
        title: 'Request a Quote',
        subtitle: 'Get a free estimate for your project',
        form: {
          name: 'Full name',
          nameRequired: 'Full name *',
          email: 'Email',
          emailRequired: 'Email *',
          phone: 'Phone',
          company: 'Company',
          projectType: 'Project type',
          projectTypeRequired: 'Project type *',
          projectTypes: {
            showcase: 'Showcase Website',
            custom: 'Custom Application',
            redesign: 'Website Redesign',
            maintenance: 'Maintenance/Support',
            other: 'Other/Question',
          },
          budget: 'Estimated budget',
          budgetOptions: {
            select: 'Select',
            low: '< 1000 CHF',
            medium: '1000-3000 CHF',
            high: '3000-5000 CHF',
            veryHigh: '5000-10000 CHF',
            enterprise: '> 10000 CHF',
          },
          timeline: 'Desired timeline',
          timelineOptions: {
            select: 'Select',
            urgent: 'Urgent (< 1 month)',
            short: '1-2 months',
            medium: '2-3 months',
            flexible: 'Flexible',
          },
          message: 'Project description',
          messageRequired: 'Project description *',
          messagePlaceholder: 'Describe your project in detail...',
          submit: 'Request a free quote',
          sending: 'Sending...',
          success: 'Your quote request has been sent successfully! We will contact you shortly.',
          error: 'An error occurred. Please try again or contact us directly.',
        },
      },
      footer: {
        rights: 'All rights reserved.',
        madeIn: 'Made with ❤️ in Switzerland',
      },
    },
  },
};

// Detect browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;

  // Check if browser language starts with 'en'
  if (browserLang.toLowerCase().startsWith('en')) {
    return 'en';
  }

  // Check if browser language starts with 'fr'
  if (browserLang.toLowerCase().startsWith('fr')) {
    return 'fr';
  }

  // Default to French for Swiss users
  return 'fr';
};

// Check if user has already selected a language
const savedLanguage = localStorage.getItem('language');
const initialLanguage = savedLanguage || getBrowserLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

// Save language preference when changed
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
