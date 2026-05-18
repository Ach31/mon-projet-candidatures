# 📌 Gestion des Candidatures

Une application AngularJS pour gérer et suivre les candidatures professionnelles. Cette application permet d'ajouter, modifier, supprimer et exporter les candidatures dans un fichier **CSV**.

---

## 📋 **Fonctionnalités**

| Fonctionnalité | Description |
|----------------|-------------|
| **Ajouter une candidature** | Ajoute une nouvelle candidature à la base de données locale. |
| **Modifier une candidature** | Met à jour le statut ou d'autres informations d'une candidature existante. |
| **Supprimer une candidature** | Supprime une candidature de la base de données. |
| **Télécharger la base de données** | Exporte toutes les candidatures au format **CSV** avec un séparateur virgule. |
| **Persistance des données** | Les données sont sauvegardées dans le **localStorage** du navigateur. |

---

## 🛠 **Technologies Utilisées**

- **AngularJS** : Framework principal pour la gestion de l'interface et de la logique applicative.
- **sql.js** : Base de données SQLite exécutée dans le navigateur pour stocker les candidatures.
- **localStorage** : Stockage persistant des données dans le navigateur.

---

## 📂 **Structure du Projet**

### 1. **Contrôleur Principal (`CandidaturesCtrl`)**
Le contrôleur gère :
- La récupération et l'affichage des candidatures.
- Les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les candidatures.
- L'export des données au format CSV.

### 2. **Base de Données**
- Une table **`candidatures`** est créée avec les colonnes :
  - `id` (clé primaire)
  - `entreprise`
  - `poste`
  - `lieu`
  - `statut`
- Les données sont stockées dans le **localStorage** et chargées au démarrage de l'application.

### 3. **Fonctionnalités Clés**
#### ✅ **Ajouter une candidature**
```javascript
$scope.ajouterCandidature = function(candidature, index) {
  // Ajoute la candidature au service et à la base de données SQLite.
  // Sauvegarde automatiquement dans le localStorage.
};
```

#### ✅ **Modifier une candidature**
```javascript
$scope.modifCandidature = function(index, candidature) {
  // Met à jour le statut ou d'autres champs d'une candidature existante.
  // Sauvegarde automatiquement dans le localStorage.
};
```

#### ✅ **Supprimer une candidature**
```javascript
$scope.supprimerCandidature = function(index) {
  // Supprime une candidature de la base de données et du localStorage.
};
```

#### ✅ **Télécharger la base de données en CSV**
```javascript
$scope.telechargerBDD = function() {
  // Exporte les candidatures au format CSV avec un séparateur virgule.
  // Le fichier généré inclut une ligne `sep=,` pour forcer l'interprétation correcte dans Excel.
};
```

---

## 🚀 **Comment Utiliser l'Application**

### 1. **Installation**
- Inclure les dépendances suivantes dans ton projet :
  ```html
  <!-- AngularJS -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>

  <!-- sql.js pour la base de données SQLite -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js"></script>
  ```

- Intégrer le contrôleur `CandidaturesCtrl` dans ton application AngularJS.

### 2. **Exécuter l'Application**
- Ouvrir l'application dans un navigateur moderne (Chrome, Firefox, Edge).
- Les données sont automatiquement chargées depuis le **localStorage** si elles existent.

### 3. **Exporter les Candidatures en CSV**
- Cliquer sur le bouton **"Télécharger la BDD"** pour générer et télécharger un fichier **`candidatures.csv`**.
- Le fichier CSV utilise **la virgule comme séparateur** et inclut une ligne `sep=,` pour une compatibilité optimale avec Excel.

---

## 📄 **Exemple de Fichier CSV Généré**
```csv
sep=,
id,entreprise,poste,lieu,statut
1,"Alten","Data Engineer","Toulouse","En attente"
2,"Capgemini","Développeur Fullstack","Paris","Accepté"
```

---

## 🔧 **Personnalisation**
- **Changer le séparateur CSV** : Remplacer `sep=,` par `sep=;` et utiliser `.join(";")` pour générer un CSV avec des points-virgules.
- **Ajouter des colonnes** : Modifier la requête SQL et la structure de la table pour inclure de nouveaux champs.

---
## 📌 **Remarques**
- Les données sont stockées dans le **localStorage** du navigateur. Elles persistent même après la fermeture de l'onglet.
- Pour réinitialiser la base de données, supprimez les données du **localStorage** via les outils de développement du navigateur.

---
## 🤝 **Contribuer**
Les contributions sont les bienvenues ! Ouvrez une **issue** ou soumettez une **pull request** pour proposer des améliorations.

---
## 📜 **Licence**
Ce projet est sous licence **MIT**. Vous êtes libre de l'utiliser, le modifier et le distribuer.