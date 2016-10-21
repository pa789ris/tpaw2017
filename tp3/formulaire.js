$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val()==""){
             $('modal-title-body').html("bienvenue");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});
