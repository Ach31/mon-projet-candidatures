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
      console.log(index);
      console.log(numero);
      candidatures.push(candidature);

      console.log("candidature n°"+candidature.num+" au poste de: "+candidature.poste+" ajoutée !");
      //btn = document.getElementById("star");


      this.sauvegarder();

      console.log(candidatures);
      numero +=1;

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
      console.log(index);
      //color_elt = document.getElementById("star").style.backgroundColor;
      btn = document.getElementById(index);
      console.log(btn.style.backgroundColor);
      if ((select_app.starred == false) & (btn.style.backgroundColor == '')){
        btn.style.backgroundColor = 'yellow';
        console.log("ancien etat: "+select_app.starred);
        candidature.starred = true;
        console.log("nouvel etat: "+candidature.starred);
        new_app = candidatures[index];
        new_app.starred = candidature.starred;
        //console.log(new_app);
        star_list.push(new_app);
        star_list_idx = star_list.findIndex(element => element === new_app);
        console.log("application added: "+new_app);
        console.log("star list updated"+"\n");
        console.log(star_list);
        console.log(star_list_idx);
      } else if ((select_app.starred == true) & (btn.style.backgroundColor == 'yellow')){
        btn.style.backgroundColor = '';
        console.log("ancien etat: "+select_app.starred);
        candidature.starred = false;
        console.log("application removed: "+new_app);
        console.log("nouvel etat: "+candidature.starred);
        console.log(index);
        console.log(numero);
        star_list.splice(star_list_idx, 1);
        console.log("star list updated"+"\n");
        console.log(star_list);

      }

      //console.log(document.getElementById("star").style.backgroundColor);
      //console.log(candidature.starred);

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
