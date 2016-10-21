$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val().length<5){
             $('.modal-title').html("Veuiller entrer votre nom");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
        else if ($("#Prenom").val().length<5) {
             $('.modal-title').html(" bienvenue "+$("#Nom").val());
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
         else {
             $('.modal-title').html(" pas bienvenue");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
