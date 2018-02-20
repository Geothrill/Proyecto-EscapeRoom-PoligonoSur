$(function(){
var overlay = $('<div id="overlay"></div>');
overlay.show();
overlay.appendTo(document.body);
$('.popup').show();
$('.cerrar').click(function(){
$('.popup').hide();
overlay.appendTo(document.body).remove();
return false;
});


$('.x').click(function(){
$('.popup').hide();
overlay.appendTo(document.body).remove();
return false;
});



$('#pc').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-pc').show();
});

$('#libro').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-libro').show();
});

$('#movil').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-movil').show();
});

$('#router').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-router').show();
});

$('#cable').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-cable').show();
});

$('#proveedor').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-proveedor').show();
});

$('#navegador').click(function(){
  overlay.show();
  overlay.appendTo(document.body);
  $(' .popup-navegador').show();
});

});
