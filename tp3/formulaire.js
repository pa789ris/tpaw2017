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
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         else {
             $('.modal-title').html(" pas bienvenue");
                   $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center='+$("#adr").val()+'&zoom=13&size=300x300&maptype=roadmap&markers='+$("#adr").val()+'"/>');
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
