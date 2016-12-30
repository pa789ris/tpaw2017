function valider(){
 var nom=document.getElementById('nom').value 
 var prenom=document.getElementById('prenom').value
 
 
   if(nom.lenght<5){
      document.getElementById('error').innerHTML="error nom"
    
       document.getElementById('resultat').innerHTML =""
      }
   
if(prenom.lenght<5){
      document.getElementById('error').innerHTML="error prenom"
 
      document.getElementById('resultat').innerHTML =""
      }
      }
