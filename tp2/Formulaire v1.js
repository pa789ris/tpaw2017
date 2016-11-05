function Validation() {

	 var nom = document.getElementById('Nom').value 
	 var prenom = document.getElementById('Prénom').value 
	 var date = document.getElementById('date').value
	 var Adresse = document.getElementById('Adresse').value 
         var Mail = document.getElementById('Mail').value 
	
	 

	 if (nom.length < 5) {

		document.getElementById('error').innerHTML ="error Nom"

		 document.getElementById('resultat').innerHTML =""

	 }

	 else if (prenom.length < 5) {

	 document.getElementById('error').innerHTML ="error Prénom"

          document.getElementById('resultat').innerHTML =""

	 }
	 else if (date.length < 5) {

	 document.getElementById('error').innerHTML ="error date"

          document.getElementById('resultat').innerHTML =""

	 }
	 else if (Adresse.length < 5) {

	 document.getElementById('error').innerHTML ="error Adresse"

          document.getElementById('resultat').innerHTML =""

	 }
	
	 else if (Mail.length < 5) {

	 document.getElementById('error').innerHTML ="error Mail"

          document.getElementById('resultat').innerHTML =""

	 }

	 else{document.getElementById('resultat').innerHTML ="BIENVENU"

document.getElementById('error').innerHTML =""}
