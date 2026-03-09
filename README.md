# Gestion de Mes Candidatures

Une application web légère et intuitive pour suivre l'avancement de vos recherches d'emploi. Développée avec **AngularJS** et **Bootstrap**, elle permet d'ajouter, de visualiser et de gérer le statut de vos candidatures en temps réel.

## 🚀 Fonctionnalités

- **Ajout de candidatures** : Enregistrez rapidement l'entreprise, le poste, le lieu et le statut initial.
- **Tableau de bord** : Visualisez toutes vos candidatures dans un tableau clair et organisé.
- **Gestion des statuts** : Suivez l'évolution de chaque candidature (En attente, Entretien, Refusé).
- **Modification et Suppression** : Mettez à jour les informations ou retirez les entrées obsolètes.
- **Interface Responsive** : Design adapté aux mobiles et bureaux grâce à Bootstrap 4.

## 🛠️ Technologies utilisées

- **Frontend** : HTML5, CSS3
- **Framework JS** : [AngularJS 1.8.2](https://angularjs.org/)
- **UI Framework** : [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- **CDN** : Chargement des librairies via CDN (Google APIs, StackPath)

## 📂 Structure du projet

Assurez-vous que votre dossier respecte l'architecture suivante pour que l'application fonctionne correctement :

```text
/mon-projet
│
├── index.html          # Fichier principal (code fourni)
├── css/
│   └── style.css       # Vos styles personnalisés
└── js/
    ├── app.js          # Initialisation du module Angular
    ├── controllers.js  # Logique métier (CandidaturesCtrl)
    └── services.js     # Services de données (optionnel)

## ⚙️ Installation et Lancement
Aucune installation complexe (npm, node) n'est requise pour cette version.

Cloner le dépôt ou télécharger les fichiers.
Vérifier les dépendances : Assurez-vous que les dossiers css et js existent et contiennent les fichiers référencés dans index.html.
Lancer l'application :
-Ouvrez simplement le fichier index.html dans votre navigateur web.
-Recommandation : Pour éviter les problèmes de sécurité liés aux requêtes AJAX (CORS) si vous utilisez un backend plus tard, utilisez un serveur local simple.
bash
-Copier
# Si vous avez Python installé
python -m http.server 8000
# Puis allez sur http://localhost:8000