$('#Nom').on('shown.bs.modal', function () {
  if ($("#Nom").val().lenght<5){
    $('.modal').modal('show')
    
})
