$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val().length<2){
             $('.modal-title').html("bienvenue");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
        else{
             $('.modal-title').html(" pas bienvenue");
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
        
    });
});
