angular.module('candidaturesApp')
  .controller('CandidaturesCtrl', function($scope, CandidaturesService) {
    $scope.candidatures = CandidaturesService.getCandidatures();

    $scope.nouvelleCandidature = {};

    $scope.ajouterCandidature = function() {
      CandidaturesService.ajouterCandidature($scope.nouvelleCandidature);
      $scope.nouvelleCandidature = {};
    };

    $scope.supprimerCandidature = function(index) {
      CandidaturesService.supprimerCandidature(index);
    };
    $scope.modifCandidature = function(index, candidature) {
      CandidaturesService.modifCandidature(index, $scope.nouvelleCandidature);
      $scope.nouvelleCandidature = {};
    };
  });
