$(document).ready(function() {

  $('.flash').click(function() {
    $("#box").html('<img src="http://i105.photobucket.com/albums/m219/trexrell/flash_zps15f35f5c.gif" width="auto" height= "50px" margin="auto">')
  })
  $('.batman').click(function() {
    $('#box').html('<img src= "http://www.puppstheories.com/spriterips/BatmanReturns6fWalk.gif" width="auto" height="50px" margin="auto">')
  })
  $('.wonderwoman').click(function(){
    $('#box').html('<img src= "http://mmii.info/icons/lightspeeddash/supers_WonderWomanSprite.gif" width="auto" height="50px" margin= "auto">')
  })

  $('.rflash').click(function(){
    $('#square').html('<img src= "http://i.imgur.com/LDWD1.gif" width="auto" height="50px" margin="auto">')
  })
  $('.thejoker').click(function(){
    $('#square').html('<img src= "http://www.puppstheories.com/spriterips/JokerWalk7fSNES.gif" width="auto" height="50px" margin="auto">')
  })
  $('.giganta').click(function(){
    $('#square').html('<img src= "http://img.photobucket.com/albums/v243/deanjo2000/gigantagrow.gif" width="auto" height="50px" margin="auto">')
  })

function playGame(){
    var counter1 = 0;
    var counter2 = 0;
  $(window).keypress(function(event) {
    if (event.which === 97) {
      counter1++;
      $('.first:nth-child(' + counter1 + ')').html('<img src="http://i105.photobucket.com/albums/m219/trexrell/flash_zps15f35f5c.gif" width="auto" height= "50px" margin:"auto">');
      if (counter1 === 8) {
        alert("Player 1 won!")
      }
    }
    if (event.which === 108) {
      counter2++;
      $('.second:nth-child(' + counter2 + ')').html('<img src="http://i.imgur.com/LDWD1.gif" width="auto" height="50px" margin:"auto">');
      if (counter2 === 8) {
        alert("player 2 won!")
      }
    }
  })
}



  playGame();
})
