angular.module('candidaturesApp')
  .service('CandidaturesService', function() {
    // Charger les candidatures depuis le localStorage
    var candidatures = JSON.parse(localStorage.getItem('candidatures')) || [];

    this.getCandidatures = function() {
      return candidatures;
    };

    this.ajouterCandidature = function(candidature) {
      candidatures.push(candidature);
      this.sauvegarder();
    };

    this.supprimerCandidature = function(index) {
      candidatures.splice(index, 1);
      this.sauvegarder();
    };

    this.sauvegarder = function() {
      localStorage.setItem('candidatures', JSON.stringify(candidatures));
    };
  });
