$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val()==""){
             $('.modal-title').html("bienvenue"+$("#Nom").val();
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
