$( function() {
    $( "#accordion" ).accordion();
  } );

$( function() {
    $( "#accordion" ).accordion();
    $( "#accordion" ).on( "accordionactivate", function( event, ui ) {
        $(ui.newPanel).css("background-color","Yellow");
        $(ui.oldPanel).css("background-color","blue");
    } );
  } );
