 
$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#Nom").val().length<5){
             $('.modal-title').html("Veuiller entrer votre nom");
            $(".modal-body").html(" Veuiller remplir tous les champs svp");
            $('.modal').modal('show');  
            
        }
        else if ($("#Prenom").val().length<5) {
             $('.modal-title').html(" "+$("#Nom").val());//mettre mr et extraire nom
             $(".modal-body").html(" Veuiller entrer votre Prenom");
            $('.modal').modal('show');      //mettre focus sur le champ d'erreur)
        }
         else if ($("#date").val()=="") {
             $('.modal-title').html(""+$("#Nom").val());//mettre mr et extraire nom
            $(".modal-body").html(" Veuiller entrer votre date de naissance"); 
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         
          else if ($("#adr").val().length<5) {
            $('.modal-title').html(""+$("#Nom").val());
           $(".modal-body").html(" Veuiller entrer une adresse valide");
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         else if ($("#Email").val()=="") {
            $('.modal-title').html(" "+$("#Nom").val());//mettre mr et extraire nom
           $(".modal-body").html(" Veuiller entrer votre mail");   
           $('.modal').modal('show');     //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
        
         else {
             $('.modal-title').html(" Bienvenue   "+$("#Nom").val());
                  $('.modal-body').html('Votre nom :   '+$("#Nom").val()+'<br/>Votre prenom :   '+$("#Prenom").val()+ '<br/>Vous etes nee le :   ' +$("#datepicker").val()+ '<br/>Vous habitez :   '+$("#adr").val()+'<br/>Votre email :   '+$("#Email").val())
            $('.modal').modal('show');
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});

 
       
            
            
  

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    $("#adr").val(latlon);

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("adr").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("demo").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("demo").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("demo").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("demo").innerHTML = "An unknown error occurred."
            break;
    }
}
