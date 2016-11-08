var boxesArray = [];

        $('.boxes li').each(function(){
            boxesArray.push(this);
        })
// function tieClass(){
// var tie = $("div#finish").className = "screen screen-win-one";
// return tieClass;
// }
//Set variables in general scope
var a = boxesArray[0];
var b = boxesArray[1];
var c = boxesArray[2];
var d = boxesArray[3];
var e = boxesArray[4];
var f = boxesArray[5];
var g = boxesArray[6];
var h = boxesArray[7];
var i = boxesArray[8];

(function() {

  var player1 = document.getElementById('player1');
  var player2 = document.getElementById('player2');
  var boxes = [];



  //Add class active to player starting the game
  var initialClass = window.onload = function() {
    document.getElementById('player1').className = 'players active';
  };


$('li.box').click(function () {
  if($('#player1').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
      $(this).addClass('box-filled-1');
      toggleThis();
  } else if ($('#player2').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
      $(this).addClass('box-filled-2');
      toggleThis();
  }
})

//Toggle so active class alternates between players
function toggleThis (){
  $(".active").toggle().animate();
  $("ul .players").toggleClass('active');

  //Remove style attribute from the li
  var stylePlayers = $("ul .players");
  stylePlayers.removeAttr('style');
}

//Add different images on mouseovers events
$('li.box').hover(function () {
  if($('#player1').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
    this.style.backgroundImage= "url(img/o.svg)";
  } else if ($('#player2').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
    this.style.backgroundImage= "url(img/x.svg)";
}
},function(){
  if(this.style.backgroundImage)
    this.style.backgroundImage = '';
})

var counter = 0;


  var check = $(document).on("click", ".box", function(){

    //Check player2
    if ($(boxesArray[0]).hasClass("box-filled-2") && $(boxesArray[1]).hasClass("box-filled-2") && $(boxesArray[2]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[0]).hasClass("box-filled-2") && $(boxesArray[3]).hasClass("box-filled-2") && $(boxesArray[6]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[0]).hasClass("box-filled-2") && $(boxesArray[4]).hasClass("box-filled-2") && $(boxesArray[7]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[1]).hasClass("box-filled-2") && $(boxesArray[4]).hasClass("box-filled-2") && $(boxesArray[7]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[2]).hasClass("box-filled-2") && $(boxesArray[5]).hasClass("box-filled-2") && $(boxesArray[8]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[3]).hasClass("box-filled-2") && $(boxesArray[4]).hasClass("box-filled-2") && $(boxesArray[5]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[6]).hasClass("box-filled-2") && $(boxesArray[7]).hasClass("box-filled-2") && $(boxesArray[8]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    } else if ($(boxesArray[2]).hasClass("box-filled-2") && $(boxesArray[4]).hasClass("box-filled-2") && $(boxesArray[6]).hasClass("box-filled-2")){
              window.location.href = "win.html";
    //Check player1
    } else if ($(boxesArray[0]).hasClass("box-filled-1") && $(boxesArray[3]).hasClass("box-filled-1") && $(boxesArray[6]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[0]).hasClass("box-filled-1") && $(boxesArray[4]).hasClass("box-filled-1") && $(boxesArray[7]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[1]).hasClass("box-filled-1") && $(boxesArray[4]).hasClass("box-filled-1") && $(boxesArray[7]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[2]).hasClass("box-filled-1") && $(boxesArray[5]).hasClass("box-filled-1") && $(boxesArray[8]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[3]).hasClass("box-filled-1") && $(boxesArray[4]).hasClass("box-filled-1") && $(boxesArray[5]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[6]).hasClass("box-filled-1") && $(boxesArray[7]).hasClass("box-filled-1") && $(boxesArray[8]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[2]).hasClass("box-filled-1") && $(boxesArray[4]).hasClass("box-filled-1") && $(boxesArray[6]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else if ($(boxesArray[0]).hasClass("box-filled-1") && $(boxesArray[1]).hasClass("box-filled-1") && $(boxesArray[2]).hasClass("box-filled-1")){
              window.location.href = "win.html";
    } else {
      // Trigger tie on 9th click
      // counter = counter + 1;
      counter += 1;
      if (counter === 9) {
        console.log('the counter is ',counter);
        window.location.href = "win.html"
        // tieClass();
        setTimeout(function(){
          $(document).ready(function(){
            console.log('i am ready');
            $('#finish').addClass('screen-win-tie');
          });
        },2000);

      }
      console.log('in the else',counter);
    }


})


}());
