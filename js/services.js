angular.module('candidaturesApp')
  .service('CandidaturesService', function() {
    // Charger les candidatures depuis le localStorage
    var candidatures = JSON.parse(localStorage.getItem('candidatures')) || [];
    var star_list = [];
    var list_button = [];
    //set numero when page is reload
    if (candidatures){
      numero = candidatures.length;
    }
    //if no application: numero reset to 0
    else {
      numero = 0;
    }
    this.getCandidatures = function() {
      return candidatures;
    };



    this.ajouterCandidature = function(candidature, index) {
 
      candidature.starred = false;
      candidature.num = numero;

      candidatures.push(candidature);

      console.log("candidature n°"+candidature.num+" au poste de: "+candidature.poste+" ajoutée !");
      //btn = document.getElementById("star");


      this.sauvegarder();

      numero +=1;

    };
    


    this.modifCandidature = function(index, candidature) {
      
      old_app = candidatures[index];

      new_app = candidatures[index];
      new_app.statut = candidature.statut;
      //console.log(new_app);

      this.sauvegarder();
    };

    this.selectCandidature = function(index, candidature) {
      select_app = candidatures[index];

      btn = document.getElementById(select_app.num);
      //selectionner une candidature
      if ((select_app.starred == false) & (btn.style.backgroundColor == '') & (select_app.num == candidatures[index].num)){
        btn.style.backgroundColor = 'yellow';
        candidature.starred = true;
        new_app = candidatures[index];
        new_app.starred = candidature.starred;
        star_list.push(new_app);
        star_list_idx = star_list.findIndex(element => element === new_app);
        console.log("candidature n°"+star_list_idx+" ajoutée à la liste des favoris");


      } 
      //déselectionner une candidature
      else if ((select_app.starred == true) & (btn.style.backgroundColor == 'yellow')){
        btn.style.backgroundColor = '';
        select_app.starred = false;

        star_list_idx = star_list.findIndex(element => element === new_app);
        console.log("candidature n°"+star_list_idx+" retirée de la liste des favoris");
        star_list.splice(star_list_idx, 1);


      }

      this.sauvegarder();
    };

    this.supprimerCandidature = function(index) {
      candidatures.splice(index, 1);
      console.log("candidature N°"+index+"supprimée");
      this.sauvegarder();
    };

    this.telechargerBDD = function() {
      console.log("export des candidatures");
      this.sauvegarder();
      //.. to be continued
    };

    this.sauvegarder = function() {
      localStorage.setItem('candidatures', JSON.stringify(candidatures));
    };
  });
