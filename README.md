# TomWeb 🇨🇭

Site vitrine moderne et dynamique pour TomWeb - Services de création de sites web en Suisse.

## 🚀 Fonctionnalités

- ✨ Design moderne et dynamique
- 🎨 Interface responsive (mobile, tablette, desktop)
- 🌍 Multilingue (Français / English)
- ⚡ Animations fluides avec Framer Motion
- 📧 Formulaire de contact intégré (Formspree)
- 🎯 Navigation smooth scroll
- 🔴 Couleurs inspirées du drapeau suisse

## 🛠️ Technologies Utilisées

- **React** - Framework JavaScript
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations
- **i18next** - Internationalisation
- **Formspree** - Gestion des formulaires

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Sections du Site

1. **Accueil** - Hero section avec présentation
2. **Services** - Présentation des services proposés
3. **Portfolio** - Lien vers thomastp.me
4. **À Propos** - Présentation personnelle et compétences
5. **Contact** - Formulaire de contact

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

- `swiss-red` : #FF0000 (Rouge suisse)
- `swiss-dark` : #DC143C (Rouge foncé)
- `tom-blue` : #0066CC (Bleu TomWeb)
- `tom-dark` : #003366 (Bleu foncé)

### Traductions

Les traductions sont gérées dans `src/i18n.js`. Pour ajouter une nouvelle langue ou modifier les textes, éditez ce fichier.

### Formulaire de Contact

Le formulaire utilise Formspree. L'endpoint est configuré dans `src/components/Contact.jsx` :

```javascript
const response = await fetch('https://formspree.io/f/mdkyrqbz', {
  // ...
});
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎯 Optimisations SEO

- Meta tags optimisés
- Structure sémantique HTML
- Performance optimisée avec Vite
- Images et animations optimisées

## 📄 Licence

© 2025 TomWeb. Tous droits réservés.

---

**Fait avec ❤️ en Suisse 🇨🇭**
