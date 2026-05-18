angular.module('candidaturesApp')
  .controller('CandidaturesCtrl', function($scope, CandidaturesService) {
    $scope.candidatures = CandidaturesService.getCandidatures();
    //console.log(candidatures);
    $scope.nouvelleCandidature = {};

    // Variable pour stocker la base de données
    let db;
    let rows = []; // Déclare rows ici pour qu'elle soit accessible dans toute la portée du contrôleur
        //set numero when page is reload
    if ($scope.candidatures){
      id = $scope.candidatures.length;
    }
    //if no application: numero reset to 0
    else {
      id = 0;
    }
    console.log("reprise du tableau a la ligne: "+id);
    // Initialiser sql.js et créer la base de données
    initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    }).then(function(SQL) {

      // Créer une nouvelle base de données en mémoire
      db = new SQL.Database();

      //str_sql = "DELETE FROM candidatures";
      //db.run(str_sql);
      // Créer la table "candidatures" si elle n'existe pas
      db.run('CREATE TABLE IF NOT EXISTS candidatures (id INTEGER PRIMARY KEY , entreprise VARCHAR NOT NULL, poste VARCHAR NOT NULL, lieu VARCHAR,statut VARCHAR NOT NULL)');
      //db.run('CREATE OR REPLACE TABLE candidatures (id INTEGER PRIMARY KEY AUTOINCREMENT, entreprise VARCHAR NOT NULL, poste VARCHAR NOT NULL, lieu VARCHAR,statut VARCHAR NOT NULL)');

      // Charger les données depuis localStorage si elles existent
      const savedDB = localStorage.getItem('candidaturesDB');
      if (savedDB) {
        const dbData = new Uint8Array(JSON.parse(savedDB));
        db = new SQL.Database(dbData);
      }

      // Sauvegarder la base de données dans localStorage
      function saveDB() {
        const dbData = db.export();
        localStorage.setItem('candidaturesDB', JSON.stringify(Array.from(dbData)));
      }
      db.exec('DELETE FROM candidatures');
      $scope.ajouterCandidature = function(candidature, index) {
        CandidaturesService.ajouterCandidature($scope.nouvelleCandidature, index);
        console.log($scope.candidatures[0].num);
        console.log($scope.candidatures);
        console.log($scope.candidatures[index]);
        //console.log(index);
        db.run(
          "INSERT INTO candidatures (id, entreprise, poste, lieu, statut) VALUES (?, ?, ?, ?, ?)",
          [
            $scope.nouvelleCandidature.num,
            $scope.nouvelleCandidature.entreprise,
            $scope.nouvelleCandidature.poste,
            $scope.nouvelleCandidature.lieu || "", // Gérer les valeurs nulles
            $scope.nouvelleCandidature.statut
          ]
        );
        saveDB(); // Sauvegarder la candidature de test

        $scope.nouvelleCandidature = {};
        console.log("Candidature ajoutée a la base de données !");
        //id += 1;
      }; // end of ajouterCandidature function
    $scope.supprimerCandidature = function(index) {
      CandidaturesService.supprimerCandidature(index);
      //console.log("candidature n°"+index+" suprimmée");
      str_sql = "DELETE FROM candidatures WHERE id = "+index
      //db.run("DELETE FROM candidatures WHERE id = ?", [id]);
      console.log(str_sql);
      db.run(str_sql);
      saveDB(); 
      console.log("Candidature retirée de la base de données !");

    };



    $scope.modifCandidature = function(index, candidature) {
      CandidaturesService.modifCandidature(index, $scope.nouvelleCandidature);
      str_sql = "UPDATE candidatures SET statut = '"+$scope.nouvelleCandidature.statut+"' WHERE id ='"+$scope.candidatures[index].num+"'";
      db.run(str_sql);
      console.log(str_sql);
      saveDB(); 
      console.log("Candidature modifiée dans la base de données !");
      $scope.nouvelleCandidature = {};
    };


    $scope.selectCandidature = function(index, candidature) {
      CandidaturesService.selectCandidature(index, $scope.nouvelleCandidature);
      $scope.nouvelleCandidature = {};
    };

    //fonction pour telecharge la BDD
    $scope.telechargerBDD = function() {

      const results = db.exec('SELECT id, entreprise, poste, lieu, statut FROM candidatures');
      if (results.length > 0) {
        const { columns, values } = results[0];
        rows = values.map((row) =>
          Object.fromEntries(columns.map((col, i) => [col, row[i]]))
        );
         // 3. Générer le contenu CSV
        let csvContent = "sep=,\n";
        // Ajouter les en-têtes (noms des colonnes)
        csvContent += columns.join(",") + "\n";

        // Ajouter chaque ligne de données
        rows.forEach(row => {
          const rowValues = columns.map(col => {
            // Échapper les guillemets et les virgules dans les valeurs
            let value = row[col];
            if (typeof value === "string") {
              value = `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          });
          csvContent += rowValues.join(",") + "\n";
        });

        // 4. Créer un blob et déclencher le téléchargement
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "candidatures.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      console.table(rows);
    }
    //db.exec('DELETE FROM candidatures');
    }); //end of function(SQL)
  }); //end of controller function