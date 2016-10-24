$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val().length<5){
             $('.modal-title').html("Veuiller entrer votre nom");
            $('.modal').modal('show');  
            
        }
        else if ($("#Prenom").val().length<5) {
             $('.modal-title').html(" Veuiller entrer votre Prenom Mr "+$("#Nom").val());//mettre mr et extraire nom
            $('.modal').modal('show');      //mettre focus sur le champ d'erreur)
        }
         else if ($("#date").val()=="") {
             $('.modal-title').html(" Entrer une date au format  Mr "+$("#Nom").val());//mettre mr et extraire nom
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
          else if ($("#Email").val()=="") {
             $('.modal-title').html(" Entrer une adresse mail valide  Mr "+$("#Nom").val());//mettre mr et extraire nom
           $('.modal').modal('show');     //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
          else if ($("#adr").val()=="") {
             $('.modal-title').html(" Entrer votre mot de passe  Mr "+$("#Nom").val());//mettre mr et extraire nom
              $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284"/>');
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         else {
             $('.modal-title').html(" pas bienvenue");
            
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
