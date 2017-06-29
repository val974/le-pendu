const mots = ["eclipse", "javascript","malhonnete","philosophe","marcher", "tomates","nombres","feuille","voiture","covoiturage"]
let chance = 0;
let choix ="";
let valeurTimer = 0;



//mise en place du timer en cliquant sur jouer
function jouer (){
	valeurTimer = 30;
	actualiserTimer();
}
function actualiserTimer(){
	if (valeurTimer > 0)
	{
		valeurTimer = valeurTimer -1;
		document.getElementById('afficherTimer')
		.innerHTML = valeurTimer;
    if (valeurTimer > 0)
    { 
    	monTimer = setTimeout('actualiserTimer()', 1000);

    	}
	}







let motsOrdi = mots[Math.random() * mots.length | 0]
 console.log(motsOrdi);
		for(i=0; motsOrdi.length > i; i++){
		       choix = motsOrdi[i];
		      console.log(choix.charAt());
		  }
console.log(motsOrdi)
	let SiChoixOk = true;
		while(SiChoixOk){
   			let	lettreUtilisateur = prompt("Devinez la lettre");
		    	if (lettreUtilisateur === choix.charAt()){ 
		     			SiChoixOk = false;
		     	
		 }else{
		 	chance++;
		 }
		} 
		     	
		}    	

		 alert(chance)
