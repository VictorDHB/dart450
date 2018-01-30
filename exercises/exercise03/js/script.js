/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  // Insert jQuery code here to run when the page is loaded
  $("#run").click(function(){
  $("#run").delay(0).fadeOut(0);

  var block1 = 500;
  setTimeout(function() {
    $('#block1').show("slow");
  }, block1);

  var block2 = 2500;
  setTimeout(function() {
    $('#block2').show("slow");
  }, block2);

  var block3 = 5000;
  setTimeout(function() {
    $('#block3').show("slow");
  }, block3);

  var block4 = 7500;
  setTimeout(function() {
    $('#block4').show("slow");
  }, block4);

  var block5 = 10000;
  setTimeout(function() {
    $('#block5').show("slow");
  }, block5);

  var block6 = 12500;
  setTimeout(function() {
    $('#block6').show("slow");
  }, block6);

  var block7 = 13200;
  setTimeout(function() {
    $('#block7').show("slow");
  }, block7);


});});
