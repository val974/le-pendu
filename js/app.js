const mots = ["ECLIPSE", "JAVASCRIPT","MALHONNETE","PHILOSOPHE","MARCHER", "TOMATES","NOMBRES","FEUILLE","VOITURE","COVOITURAGE"]

let chance = 0;






let motsOrdi = mots[Math.random() * mots.length | 0]
 alert(motsOrdi)
		for(i=0; motsOrdi.length > i; i++){
		      let choix = motsOrdi[i];
		      console.log(choix)
		  }
   let erreur = true;
   		while(erreur){
   			lettreUtilisateur =prompt("Devinez la lettre");

   		}

		     if (lettreUtilisateur === choix[i]){
		     	erreur = false;

		 }  
