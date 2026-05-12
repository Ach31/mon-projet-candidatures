# 📌 Gestion de mes candidatures

Une application web simple pour suivre et gérer vos candidatures d'emploi. Développée avec **HTML**, **Bootstrap** et **AngularJS**.

---

## 📁 Structure du projet

```
.
├── index.html          # Page principale de l'application
├── js/
│   ├── app.js          # Module AngularJS principal
│   ├── controllers.js  # Logique des contrôleurs
│   └── services.js     # Services AngularJS
├── css/
│   └── style.css       # Styles personnalisés
├── Dockerfile          # Configuration pour Docker
└── README.md           # Ce fichier
```

---

## 🚀 Installation et exécution

### 1️⃣ **Exécution locale (sans Docker)**

1. **Cloner ou télécharger** le projet sur votre machine.
2. **Ouvrir le fichier `index.html**` dans un navigateur web (Chrome, Firefox, etc.).
  - L'application fonctionne directement, car elle utilise des CDN pour AngularJS et Bootstrap.

---

### 2️⃣ **Exécution avec Docker**

#### Prérequis

- [Docker](https://www.docker.com/) installé sur votre machine.

#### Étapes

1. **Construire l'image Docker** :
  ```bash
   docker build -t gestion-candidatures .
  ```
2. **Lancer le conteneur** :
  ```bash
   docker run -d -p 8080:80 --name mon-app-candidatures gestion-candidatures
  ```
3. **Accéder à l'application** :
  Ouvrez votre navigateur et allez sur :  
   `**http://localhost:8080**`
4. **(Optionnel) Mode développement avec rechargement automatique** :
  Si vous souhaitez que les modifications soient prises en compte sans reconstruire l'image, utilisez :

---

## ✨ Fonctionnalités

- **Ajouter une candidature** :  
Remplissez le formulaire avec le nom de l'entreprise, le poste, le lieu et le statut, puis cliquez sur **Ajouter**.
- **Supprimer une candidature** :  
Cliquez sur le bouton **Supprimer** pour retirer une candidature de la liste.
- **Modifier le statut** :  
Utilisez le bouton **Modifier le statut** pour mettre à jour le statut d'une candidature.
- **Marquer une candidature** :  
Le bouton en forme d'étoile (⭐) permet de marquer une candidature comme favorite (à implémenter dans le CSS/JS).

---

## 🛠 Technologies utilisées

- **Frontend** :
  - HTML5
  - [Bootstrap 4](https://getbootstrap.com/) (pour le style)
  - [AngularJS 1.8.2](https://angularjs.org/) (pour la logique)
- **Docker** :
  - [Nginx Alpine](https://hub.docker.com/_/nginx) (pour servir l'application)

---

## 📝 Personnalisation

### Ajouter des styles

Modifiez le fichier `css/style.css` pour personnaliser l'apparence de l'application.

### Étendre les fonctionnalités

- Ajoutez un backend (Node.js, Python, etc.) pour sauvegarder les candidatures dans une base de données.
- Utilisez `localStorage` pour persister les données côté client.

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Ouvrez une *issue* ou soumettez une *pull request* pour proposer des améliorations.

---

## 📜 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de l'utiliser, le modifier et le distribuer.