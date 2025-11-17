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
      footer: {
        rights: 'All rights reserved.',
        madeIn: 'Made with ❤️ in Switzerland',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
