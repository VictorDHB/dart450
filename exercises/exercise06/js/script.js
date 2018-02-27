/*

Blast.js template
Pippin Barr


*/

$(document).ready(function() {

  $("div").blast({ search: "subliminal" }).mouseover(reveal);
  $("div").blast({ search: "evil" }).mouseover(reveal);
  $("div").blast({ search: "ψ(｀∇´)ψ" }).mouseover(reveal);
  $("div").blast({ search: "don't" }).mouseover(reveal);
  $("div").blast({ search: "never" }).mouseover(reveal);
  $("div").blast({ search: "not" }).mouseover(reveal);
  $("div").blast({ search: "muahahahahaha!!!!" }).mouseover(reveal);

function reveal () {
  $(this).animate({
      color: 'red',
  });
}

});
