angular.module('candidaturesApp')
  .service('CandidaturesService', function() {
    // Charger les candidatures depuis le localStorage
    var candidatures = JSON.parse(localStorage.getItem('candidatures')) || [];
    var star_list = [];
    var numero = 0;
    this.getCandidatures = function() {
      return candidatures;
    };

    this.ajouterCandidature = function(candidature, index) {
      candidatures.push(candidature);
      console.log("candidature au poste de: "+candidature.poste+" ajoutée !");
      //console.log(this.getCandidatures());
      candidature.starred = false;
      btn_form = document.getElementById("btn-formulaire");
      btn_form.innerHTML = "<button type='submit' id='star' class='btn btn-star' ng-model='nouvelleCandidature.starred'></button>"

      //btn = document.getElementById("star");
      set_name = function(){
        document.getElementById("star").setAttribute("name", index);
      }
      set_name();

      console.log(document.getElementById("star").getAttribute("name"));
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

    this.selectCandidature = function(index, candidature) {
      select_app = candidatures[index];
      console.log(select_app.starred);
      //color_elt = document.getElementById("star").style.backgroundColor;
      btn = document.getElementById("star");
      if (select_app.starred == false){
        btn.id = index;
        btn.style.backgroundColor = "yellow";
        console.log("ancien etat: "+select_app.starred);
        candidature.starred = true;
        console.log("nouvel etat: "+candidature.starred);
        new_app = candidatures[index];
        new_app.starred = candidature.starred;
        //console.log(new_app);
        star_list.push(new_app);
        //console.log(star_list);

      } else{
        document.getElementById(index).style.backgroundColor = "white";
        star_list.splice(index, 1);
        candidature.starred = false;

      }

      //console.log(document.getElementById("star").style.backgroundColor);
      console.log(candidature.starred);

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
