function valider(){
 var nom=document.getElementById('nom').value 
 var prenom=document.getElementById('prenom').value
 
 
   if(nom.lenght<5){
      document.getElementById('error').innerHTML="error nom"
      }
      }
