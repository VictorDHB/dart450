/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  $('.pinkguy').click(function () {
  var randomX = Math.random() * $(window).width();
  var randomY = Math.random() * $(window).height();
  $('.pinkguy')
  .clone()
  .append('b0ss PLS')
  .append('GIBE DA PUSI')
  .prepend('<img src="img/eyb0ss.jpg" />')
  .prepend('<img src="img/pink.jpg" />')
  .appendTo($('.pinkguy'));
  $(this).css({
      position: 'absolute',
      top: Y - 100,
      left: X - 100
  });
});

  $('button').click(function (){
  location.reload();
  })

});
