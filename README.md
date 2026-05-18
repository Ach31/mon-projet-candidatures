# 📌 Gestion de mes candidatures

Une application web simple pour suivre et gérer vos candidatures d'emploi avec une base de données **SQLite** intégrée. Développée avec **HTML**, **Bootstrap**, **AngularJS** et **sql.js**.

---

## 📁 Structure du projet

```
.

├── index.html          # Page principale de l'application
├── assets/
│   ├── download.webp   # Icone pour le boutton de téléchargement
│   ├── star.png        # Icone pour les bouttons de sélection
├── js/
│   ├── app.js          # Module AngularJS principal
│   ├── controllers.js  # Logique des contrôleurs (inclut la gestion de la BDD SQLite)
│   └── services.js     # Services AngularJS
├── css/
│   └── style.css       # Styles personnalisés
├── node_modules/       # Toutes les dépendances nécessaires au fonctionnement de l'application
├── Dockerfile          # Configuration pour Docker
├── package-lock.json   # fichier de configuration des packages de javascript
├── package.json        # fichier de configuration des packages de javascript
└── README.md           # Ce fichier
```

---

## 🚀 Installation et exécution

### 1️⃣ **Exécution locale (sans Docker)**

1. **Cloner ou télécharger** le projet sur votre machine.
2. **Ouvrir le fichier `index.html`** dans un navigateur web moderne (Chrome, Firefox, Edge).
   - L'application fonctionne directement, car elle utilise des CDN pour AngularJS, Bootstrap et **sql.js**.

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

---

## ✨ Fonctionnalités

- **Ajouter une candidature** :
  Remplissez le formulaire avec l'entreprise, le poste, le lieu et le statut, puis cliquez sur **Ajouter**. Les données sont automatiquement sauvegardées dans la base de données **SQLite** et dans le **localStorage**.

- **Supprimer une candidature** :
  Cliquez sur le bouton **Supprimer** pour retirer une candidature de la liste et de la base de données.

- **Modifier une candidature** :
  Sélectionnez une candidature, modifiez les informations souhaitées (notamment le statut), puis validez pour mettre à jour la base de données.

- **Télécharger la base de données en CSV** :
  Cliquez sur le bouton **Télécharger la BDD** pour exporter toutes les candidatures au format **CSV** avec un séparateur virgule (`sep=,`). Le fichier généré est compatible avec Excel et d'autres outils de tableur.

---

## 🛠 Technologies utilisées

- **Frontend** :
  - HTML5
  - [Bootstrap 4](https://getbootstrap.com/) (pour le style)
  - [AngularJS 1.8.2](https://angularjs.org/) (pour la logique)
  - [sql.js](https://sql.js.org/) (pour la base de données SQLite dans le navigateur)

- **Stockage** :
  - **localStorage** : Sauvegarde des données de la base de données SQLite pour une persistance entre les sessions.

- **Docker** :
  - [Nginx Alpine](https://hub.docker.com/_/nginx) (pour servir l'application)

---

## 📝 Personnalisation

### Ajouter des styles
Modifiez le fichier `css/style.css` pour personnaliser l'apparence de l'application.

### Étendre les fonctionnalités
- **Ajouter des colonnes** : Modifiez la requête SQL dans `controllers.js` pour inclure de nouveaux champs (ex: date de candidature, salaire, contact).
- **Changer le séparateur CSV** : Dans la fonction `telechargerBDD`, remplacez `sep=,` par `sep=;` et utilisez `.join(";")` pour générer un CSV avec des points-virgules.
- **Importer des données** : Ajoutez une fonction pour importer un fichier CSV et peupler la base de données.

---
## 🔍 Exemple de code clé

### Initialisation de la base de données SQLite
```javascript
initSqlJs({
  locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
}).then(function(SQL) {
  db = new SQL.Database();
  db.run('CREATE TABLE IF NOT EXISTS candidatures (id INTEGER PRIMARY KEY, entreprise VARCHAR NOT NULL, poste VARCHAR NOT NULL, lieu VARCHAR, statut VARCHAR NOT NULL)');
});
```

### Export en CSV
```javascript
$scope.telechargerBDD = function() {
  const results = db.exec('SELECT id, entreprise, poste, lieu, statut FROM candidatures');
  // Génération du CSV avec sep=,
  // ...
};
```

---
## 🤝 Contribuer

Les contributions sont les bienvenues ! Ouvrez une *issue* ou soumettez une *pull request* pour proposer des améliorations.

---
## 📜 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de l'utiliser, le modifier et le distribuer.