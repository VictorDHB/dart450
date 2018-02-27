/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $("#run").click(function(){
  $(".start").delay(0).fadeOut("slow");

  // Once the button is clicked, the main page fades into the next one
  var wrapper = 500;
  setTimeout(function() {
  $('.wrapper').show("slow");
  }, wrapper);

  // Using the in-view plugin, the background changes as we scroll down
  var $target = $('.wrapper');
  inView('.section').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );

  // Button to switch alter ego
  $("#next").click(function(){
	  $(this).hide(function(){
	$("p").toggle();
	$("#alt23").css("background-color", "black");
  });});

  // Thoughts appear when you click on sentences
    $("#thought1").click(function(){
        alert("I hate mornings. Ugh.").trigger('click');
    });

	  $("#thought2").click(function(){
        alert("Bacon and eggs!").trigger('click');
    });
    $("#thought3").click(function(){
        alert("Crap, I'm late!").trigger('click');
    });
    $("#thought4").click(function(){
        alert("Oh man. Just in time..").trigger('click');
    });
    $("#thought5").click(function(){
        alert("Sushi or poke? (◎_◎;)").trigger('click');
    });
    $("#thought6").click(function(){
        alert("Hope I don't fall asleep...").trigger('click');
    });
    $("#thought7").click(function(){
        alert("FREEDOM!!!＼（Ｔ∇Ｔ）／").trigger('click');
    });
    $("#thought8").click(function(){
        alert("Home sweet home").trigger('click');
    });
    $("#thought9").click(function(){
        alert("Nomnomnomnomnomnom").trigger('click');
    });
    $("#thought10").click(function(){
        alert("let's see what's on Instagram...");
        alert("*watches random robot dance video*");
        alert("Bumping some Rich Brian ♪～(￣ε￣)").trigger('click');
    });
    $("#thought11").click(function(){
        alert("Oh crap it's due tomorrow?!?!（・□・；）").trigger('click');
    });
    $("#thought12").click(function(){
        alert("I am so dead (┳Д┳)").trigger('click');
    });
    $("#thought13").click(function(){
        alert("I should take off my glasses. Leaving the matcha on the table.").trigger('click');
    });
    $("#thought14").click(function(){
        alert("Hmm... Should I get ramen or hamburger tomorrow?").trigger('click');
    });

  // Opens a new window. Second story only
  $("#insta").click(function(){
          window.open("https://www.instagram.com/littlevictah/");
    });

  $("#richbrian").click(function(){
            window.open("https://www.youtube.com/watch?v=rzc3_b_KnHc");
    });

  $("#magic").click(function(){
            window.open("https://i.imgur.com/RUW3I8n.gif");
    });

  $("#robot").click(function(){
            window.open("https://www.youtube.com/watch?v=MXyOjDp5CwQ");
    });

  $("#frank").click(function(){
            window.open("https://www.youtube.com/watch?v=El1BhIQFMfs");
    });



});

});


});
