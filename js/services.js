angular.module('candidaturesApp')
  .service('CandidaturesService', function() {
    // Charger les candidatures depuis le localStorage
    var candidatures = JSON.parse(localStorage.getItem('candidatures')) || [];

    this.getCandidatures = function() {
      return candidatures;
    };

    this.ajouterCandidature = function(candidature) {
      candidatures.push(candidature);
      console.log("candidature au poste de: "+candidature.poste+" ajoutée !");
      console.log(this.getCandidatures());
      this.sauvegarder();
    };

    this.modifCandidature = function(index, candidature) {
      
      old_app = candidatures[index];
      console.log(old_app);
      console.log("ancien statut: "+old_app.statut);
      console.log("nouveau statut: "+candidature.statut);
      new_app = candidatures[index];
      new_app.statut = candidature.statut;
      console.log(new_app);

      //console.log(candidatures);
      this.sauvegarder();
    };

    this.supprimerCandidature = function(index) {
      candidatures.splice(index, 1);
      console.log("candidature N°"+index+"supprimée");
      this.sauvegarder();
    };

    this.sauvegarder = function() {
      localStorage.setItem('candidatures', JSON.stringify(candidatures));
    };
  });
