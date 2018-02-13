/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  $(document).ready(function(){

    $("#div01").click(function(){
      $(this).hide(function(){
        alert("Nope, that's not it.");
      });
    });

    $("#div02").click(function(){
      $(this).hide(function(){
        alert("Try again, bud.");
      });
    });

    $("#div03").click(function(){
      $(this).hide(function(){
        alert("Yes!");
        alert("No wait. I lied.");
        alert("I'm so sorry");
        alert("It's close");
      });
    });

    $("#div04").click(function(){
      $(this).hide(function(){
        alert("You're not giving up, are ya?");
      });
    });

    $("#div05").click(function(){
      $(this).hide(function(){
        alert("...");
        alert("!!!");
        alert("Oh.");
        alert("Didn't see you there.");
        alert("What were you looking for again?");
        alert("...Oh yeah.");
        alert("The enemy.");
        alert("Why so much hatred though?");
        alert("Anyways, it's not here obviously. Keep looking.");
      });
    });

    $("#div06").click(function(){
      $(this).hide(function(){
        alert("You win!");
        setTimeout(function() { alert("SYKE!"); }, 1500);
      });
    });

    $("#div07").click(function(){
      $(this).hide(function(){
        alert("OMG!");
        alert("...Wait.");
        alert("Nevermind.");
        alert("Carry on.");
      });
    });

    $("#div08").click(function(){
      $(this).hide(function(){
        alert("Oh hai there");
        alert("I was just stalling you.");
        alert("The enemy is in the title.");
        alert("Get it?");
        alert("It was pretty obvious though.");
        alert("...");
        alert("What?");
        alert("You mad bro?");
        alert("(ツ)_/¯");
      });
    });

  });

});
