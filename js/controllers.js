angular.module('candidaturesApp')
  .controller('CandidaturesCtrl', function($scope, CandidaturesService) {
    $scope.candidatures = CandidaturesService.getCandidatures();

    $scope.nouvelleCandidature = {};

    // Variable pour stocker la base de données
    let db;

    // Initialiser sql.js et créer la base de données
    initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    }).then(function(SQL) {

      // Créer une nouvelle base de données en mémoire
      db = new SQL.Database();

      //str_sql = "DELETE FROM candidatures";
      //²db.run(str_sql);
      // Créer la table "candidatures" si elle n'existe pas
      db.run('CREATE TABLE IF NOT EXISTS candidatures (id INTEGER PRIMARY KEY AUTOINCREMENT, entreprise VARCHAR NOT NULL, poste VARCHAR NOT NULL, lieu VARCHAR,statut VARCHAR NOT NULL)');
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
      $scope.ajouterCandidature = function(candidature, index) {
        CandidaturesService.ajouterCandidature($scope.nouvelleCandidature, index);
        db.run(
          "INSERT INTO candidatures (entreprise, poste, lieu, statut) VALUES (?, ?, ?, ?)",
          [
            $scope.nouvelleCandidature.entreprise,
            $scope.nouvelleCandidature.poste,
            $scope.nouvelleCandidature.lieu || "", // Gérer les valeurs nulles
            $scope.nouvelleCandidature.statut
          ]
        );
        saveDB(); // Sauvegarder la candidature de test

        $scope.nouvelleCandidature = {};
        console.log("Candidature ajoutée a la base de données !");

      }; // end to ajouterCandidature function
    $scope.supprimerCandidature = function(index) {
      CandidaturesService.supprimerCandidature(index);
      str_sql = "DELETE FROM candidatures WHERE id ='"+index+"'";
      db.run(str_sql);
      saveDB(); 
      console.log("Candidature retirée de la base de données !");

    };



    $scope.modifCandidature = function(index, candidature) {
      CandidaturesService.modifCandidature(index, $scope.nouvelleCandidature);
      str_sql = "UPDATE candidatures SET statut = '"+$scope.nouvelleCandidature.statut+"' WHERE id ='"+index+"'";
      db.run(str_sql);
      saveDB(); 
      console.log("Candidature modifiée dans la base de données !");
      $scope.nouvelleCandidature = {};
    };


    $scope.selectCandidature = function(index, candidature) {
      CandidaturesService.selectCandidature(index, $scope.nouvelleCandidature);
      $scope.nouvelleCandidature = {};
    };
    //fnction to download all the applications

    $scope.telechargerBDD = function() {
      CandidaturesService.telechargerBDD();
      const outputFilePath = 'output.csv';
      const ws = createWriteStream(outputFilePath);

      fastcsv
        .write(rows, { headers: false }) // Specify headers: false since headers are in the data
        .pipe(ws)
        .on('finish', () => {
          console.log(`Data written to ${outputFilePath} as a CSV.`);
        });

    };
    //test to see if bdd is well structured
      const results = db.exec('SELECT * FROM candidatures');
      if (results.length > 0) {
        const { columns, values } = results[0];
        const rows =  values.map((row) =>
          Object.fromEntries(columns.map((col, i) => [col, row[i]]))
        );
        console.table(rows);

      }
      //delete records from candidaures
      str_sql = "DELETE FROM candidatures";
      db.run(str_sql);
      
    }); //end to function(SQL)
  })//end to controller function