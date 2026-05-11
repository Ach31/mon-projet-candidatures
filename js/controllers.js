angular.module('candidaturesApp')
  .controller('CandidaturesCtrl', function($scope, CandidaturesService) {
    $scope.candidatures = CandidaturesService.getCandidatures();

    $scope.nouvelleCandidature = {};

    $scope.ajouterCandidature = function(candidature, index) {
      CandidaturesService.ajouterCandidature($scope.nouvelleCandidature, index);
      $scope.nouvelleCandidature = {};
    };

    $scope.supprimerCandidature = function(index) {
      CandidaturesService.supprimerCandidature(index);
    };
    $scope.modifCandidature = function(index, candidature) {
      CandidaturesService.modifCandidature(index, $scope.nouvelleCandidature);
      $scope.nouvelleCandidature = {};
    };
    $scope.selectCandidature = function(index, candidature) {
      CandidaturesService.selectCandidature(index, $scope.nouvelleCandidature);
      $scope.nouvelleCandidature = {};
    };
  });
