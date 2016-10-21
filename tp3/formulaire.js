$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val()==""){
             $('.modal-title').html("bienvenue"+$("#Prenom").val());
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
