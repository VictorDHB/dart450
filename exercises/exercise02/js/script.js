$(document).ready(function () {
  // All our code goes in here!

  $( "#multi" ).click(function() {
    $( "p" ).toggle("slow");
  });


  $( ".boom" ).click(function() {
  $( ".boom" ).toggle('drop', {direction: 'right'});
});

$( ".pop" ).click(function() {
$( ".pop" ).fadeOut("fast");
});

$( ".pow" ).click(function() {
$( ".pow" ).toggle('drop', {direction: 'left'});
});


  $('#grow').on('click',function () {
    $('.growingtext').animate({
      fontSize: '+=1em',
      color: 'green',
    },1000);
  });

  $('#small').on('click',function () {
    $('.growingtext').animate({
      fontSize: '-=1em',
      color: 'red',
    },1000);
  });

});
