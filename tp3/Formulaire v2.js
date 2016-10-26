//document.getElementById('error').style.display =  "block"

 //var nom = document.getElementById('Nom').value 

function Validation() {

	 var nom = document.getElementById('Nom').value 
	 var prenom = document.getElementById('Prénom').value 
	 

	 if (nom.length < 5) {

		document.getElementById('error').innerHTML ="error Nom"

		 document.getElementById('resultat').innerHTML =""

	 }

	 else if (prenom.length < 5) {

	 document.getElementById('error').innerHTML ="error Prénom"

          document.getElementById('resultat').innerHTML =""

	 }
	

	 else{document.getElementById('resultat').innerHTML ="BIENVENU Mr"+$("#Nom")

	 document.getElementById('error').innerHTML =""}

}
