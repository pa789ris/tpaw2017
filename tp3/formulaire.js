$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val().length<5){
             $('.modal-title').html("Veuiller entrer votre nom");
            $(".modal-body").html(" Veuiller remplir tous les champs svp");
            $('.modal').modal('show');  
            
        }
        else if ($("#Prenom").val().length<5) {
             $('.modal-title').html(" Mr :  "+$("#Nom").val());//mettre mr et extraire nom
             $(".modal-body").html(" Veuiller entrer votre Prenom");
            $('.modal').modal('show');      //mettre focus sur le champ d'erreur)
        }
         else if ($("#date").val()=="") {
             $('.modal-title').html(" Mr :  "+$("#Nom").val());//mettre mr et extraire nom
            $(".modal-body").html(" Veuiller entrer votre date de naissance"); 
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         
          else if ($("#adr").val()=="") {
            $('.modal-title').html(" Mr :  "+$("#Nom").val());
           $(".modal-body").html(" Veuiller entrer une adresse valide");
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         else if ($("#Email").val()=="") {
            $('.modal-title').html(" Mr :  "+$("#Nom").val());//mettre mr et extraire nom
           $(".modal-body").html(" Veuiller entrer votre mail");   
           $('.modal').modal('show');     //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
        
         else {
             $('.modal-title').html(" pas bienvenue");
                   $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center='+$("#adr").val()+'&zoom=13&size=300x300&maptype=roadmap&markers='+$("#adr").val()+'"/>');
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
