

        var boxesArray = [];

        $('.boxes li').each(function(){
            boxesArray.push(this);
        })


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


    //Player 1 starts


    $('li.box').click(function () {
      if($('#player1').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
          $(this).addClass('box-filled-1');
          toggleThis();
        }else if ($('#player2').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
            $(this).addClass('box-filled-2');
            toggleThis();
        }
      })


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
  }else if ($('#player2').hasClass('active') && !($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2'))){
        this.style.backgroundImage= "url(img/x.svg)";
  }
},function(){
  if(this.style.backgroundImage)
      this.style.backgroundImage = '';
})

// movesLeft: boxesArray.onclick(function(){
//            for (var i = 0 ; boxesArray.length < 9 ; i+){
//
//
//            }
//
// })
















}());
