# 🛒 Shop React

## 1. Présentation du projet
Shop React est une application web développée avec React.js. Elle permet d'afficher des produits depuis une API externe, de rechercher un produit par son ID et de consulter ses détails.

## 2. Objectifs
- Apprendre les bases de React.
- Créer des composants réutilisables.
- Utiliser les Hooks React.
- Récupérer des données depuis une API.
- Gérer la navigation entre les pages.

## 3. Technologies utilisées
- HTML5
- CSS3
- JavaScript
- React.js
- React Router DOM
- FakeStoreAPI

## 4. Fonctionnalités
- Afficher la liste des produits.
- Afficher les informations des produits.
- Rechercher un produit par ID.
- Consulter les détails d'un produit.
- Naviguer entre les pages.

## 5. Installation et lancement

Cloner le projet :

```bash
git clone URL_DU_REPOSITORY
```

Accéder au dossier :

```bash
cd shop
```

Installer les dépendances :

```bash
npm install
```

Lancer l'application :

```bash
npm start
```

Application disponible sur : http://localhost:3000

## 6. Structure du projet

```text
shop/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── ProductList.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md
```

## 7. Routes React

| Route | Description |
|---|---|
| `/` | Liste des produits |
| `/product/:id` | Détails d'un produit |

## 8. API utilisée

**FakeStoreAPI :** https://fakestoreapi.com/

- Tous les produits : `https://fakestoreapi.com/products`
- Produit par ID : `https://fakestoreapi.com/products/1`

## 9. Concepts React utilisés

- **Components :** créer des éléments réutilisables.
- **JSX :** écrire du HTML dans JavaScript.
- **useState :** gérer les données et les états.
- **useEffect :** exécuter des opérations après le rendu.
- **useParams :** récupérer l'ID depuis l'URL.
- **useNavigate :** naviguer entre les pages.
- **map() :** parcourir et afficher les produits.
- **fetch() :** récupérer les données depuis l'API.
- **Link :** créer des liens entre les pages.

## 10. GitHub

Pour envoyer les modifications sur GitHub :

```bash
git add .
git commit -m "Update project"
git push
```

## Conclusion

Ce projet m'a permis de pratiquer les bases de React.js, les Hooks, la consommation d'une API et la navigation avec React Router DOM.