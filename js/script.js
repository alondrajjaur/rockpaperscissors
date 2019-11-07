// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$("document").ready(function(){
$("button").click(function () {
    var name =$("#input").val();
    $("#userChoice").html(name)
  let Computerchoice = Math.random();
  console.log(Computerchoice);
    if (Computerchoice < .333) {
        $("#result").html("rock");
    } else if(Computerchoice > .7) {
      $("#result").html("paper")
    } else {
      $("#result").html("scissors")
    }
})
});

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

