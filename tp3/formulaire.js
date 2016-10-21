$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val().length<5){
             $('.modal-title').html("Veuiller entrer votre nom");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
        else if ($("#Prenom").val().length<5) {
             $('.modal-title').html(" Veuiller entrer votre Prenom Mr "+$("#Nom").val());//mettre mr et extraire nom
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
         else if ($("#date").val()=="") {
             $('.modal-title').html(" Entrer une date au format  Mr "+$("#Nom").val());//mettre mr et extraire nom
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
          else if ($("#Email").val()=="") {
             $('.modal-title').html(" Entrer une date au format  Mr "+$("#Nom").val());//mettre mr et extraire nom
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
          else if ($("#Password").val()=="") {
             $('.modal-title').html(" Entrer une date au format  Mr "+$("#Nom").val());//mettre mr et extraire nom
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         else {
             $('.modal-title').html(" pas bienvenue");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
