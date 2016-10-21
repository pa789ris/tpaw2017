$(document).ready(function ()) {
    $("#validate").click(function(){
        if ($("#Nom").val()=""){
    $('.modal').modal('show');       //mettre focus sur le champ d'erreur
  })
  else if ($("#Prenom").val()=""){
    $('.modal').modal('show');
            }         
  else if ($("#date").val()=''){
    $('.modal').modal('show');
            }
  else $('.modal').modal('show');/mettre bienvenue $nom et $prenom
  
      
    });

 });
    
    
  
