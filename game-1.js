$(document).ready(function() {


  // Player 1 character options
  var $character_target = $("#box");
  var characters = [
    {
      $el: $('.flash'),
      img: "http://i105.photobucket.com/albums/m219/trexrell/flash_zps15f35f5c.gif",
      name: "Flash"
    },
    {
      $el: $('.batman'),
      img: "http://www.puppstheories.com/spriterips/BatmanReturns6fWalk.gif",
      name: "Batman"
    },
    {
      $el: $('.wonderwoman'),
      img: "http://mmii.info/icons/lightspeeddash/supers_WonderWomanSprite.gif",
      name: "WonderWoman"
    }
  ];


  characters.forEach(function(character){
    character.$el.click(function() {
      $character_target.html('<img src="' + character.img + '">');
    })
  })

  // Player 2 character options
  // TODO: refactor following the pattern above
  $('.rflash').click(function() {
    $('#square').html('<img src="http://i.imgur.com/LDWD1.gif">')
  })
  $('.thejoker').click(function() {
    $('#square').html('<img src="http://www.puppstheories.com/spriterips/JokerWalk7fSNES.gif">')
  })
  $('.giganta').click(function() {
    $('#square').html('<img src="http://img.photobucket.com/albums/v243/deanjo2000/gigantagrow.gif">')
  })

  function playGame() {
    var player1 = {
      counter: 0,
      keyCode: 97 // e.g. "a" char
    };

    var player2 = {
      counter: 0,
      keyCode: 108 // e.g. "j" char
    };

    var players = [player1, player2];

    var winPosition = 42;

    $(window).keypress(function(event) {
      // TODO: Refactor to be DRY. What if we had 10 players?
      if (event.which === players[0].keyCode) {
        players[0].counter++;
        $('.first:nth-child(' + players[0].counter + ')').html('<img src="http://i105.photobucket.com/albums/m219/trexrell/flash_zps15f35f5c.gif" width="auto" height= "50px" margin:"auto">'); // FIXME: hardcoded image
        if (players[0].counter === winPosition) {
          alert("Player 1 won!");
        }
      }
      if (event.which === players[1].keyCode) {
        players[1].counter++;
        $('.second:nth-child(' + players[1].counter + ')').html('<img src="http://i.imgur.com/LDWD1.gif" width="auto" height="50px" margin:"auto">'); // FIXME: hardcoded image
        if (players[1].counter === winPosition) {
          alert("player 2 won!");
        }
      }
    });
  }



  playGame();
});
