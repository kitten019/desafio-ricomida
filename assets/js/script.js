//Tooltips de los botones del header
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Eventos JQuery
$(function(){
    $('#send-email').click(function(){
        alert("El correo fue enviado correctamente");
    })

    //Uso método on
    $( "h3" ).on( "dblclick", function() {
        $(this).css('color','red')
      });

   //Uso método toggle
   $('.card-title').on("click", function() {
        $('.card-text').toggle();
   })

})
