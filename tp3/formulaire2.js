$(document).ready(function () {
    $("#validate").click(function(){
        if ($("#nom").val().length<5){
             $('.modal-title').html("Veuiller entrer votre nom");
            $('.modal-body').html(" Veuiller remplir tous les champs svp");
            $('.modal').modal('show');  
            
        }
        
        
     
        
        else if ($("#prenom").val().length<5) {
             $('.modal-title').html(" "+$("#nom").val());//mettre mr et extraire nom
             $(".modal-body").html(" Veuiller entrer votre Prenom");
            $('.modal').modal('show');      //mettre focus sur le champ d'erreur)
            
        }
        
        

         else if ($("#datepicker").val()=="") {
             $('.modal-title').html(""+$("#nom").val());//mettre mr et extraire nom
            $(".modal-body").html(" Veuiller entrer votre date de naissance"); 
            $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
         
          else if ($("#adr").val()=="") {
            $('.modal-title').html(""+$("#nom").val());
           $(".modal-body").html(" Veuiller entrer une adresse valide");
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
             //faire teste pour la date
       }
      
        
        else{
            $('.modal-title').html("bienvenue"+" "+$("#nom").val());
            $('.modal-body').html("date de naissance    "+$("#datepicker").val()+"   adresse   </br>")
           $('.modal-maps').html(" <img src='https://maps.googleapis.com/maps/api/staticmap?center="+$("#adr").val()+"&zoom=16&size=400x200&path=weight:3%7Ccolor:blue%7Cenc:{coaHnetiVjM??_SkM??~R&key=AIzaSyCmQS716Lawj3T_dgBVlj_eXZ33-CrcdCY'/></br></br>"+$("#adr").val());
            $('.modal').modal('show');
        }
        
         else {
             $('.modal-title').html(" Bienvenue   "+$("#nom").val());
          $('.modal-body').html('<p>vous etes neee le    ' +$("#datepicker").val()+ ' et vous habitez : <br/>  </p> ')      
          $('.modal-maps').html(" <img src='https://maps.googleapis.com/maps/api/staticmap?center="+$("#adr").val()+"&zoom=16&size=400x200&path=weight:3%7Ccolor:blue%7Cenc:{coaHnetiVjM??_SkM??~R&key=AIzaSyCmQS716Lawj3T_dgBVlj_eXZ33-CrcdCY'/></br></br>"+$("#adr").val());
          $('.modal').modal('show');
           $('.modal').modal('show');       //mettre focus sur le champ d'erreur)
        }
    });
});

 
       
            
            
  

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("adr").innerHTML = "Geolocation is not supported by this browser.";
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
