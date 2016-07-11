$(document).ready(function(){


  function Game() {
    //Creates a new instance of player 1
    this.player1 = new Player("1"); //instantiates player
    //works w/property created in the Player function.
    //Do the same for a player 2
    this.player2 = new Player("2"); //instances player

    //Create the track
    this.track1 = new Track(); //creates 2 new instantses of Track()
    this.track2 = new Track();
  }

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    //
  };

  // A starter Player constructor.
  function Player(team) { //player class which defines the properties of a player.
    this.name = team;
    this.position = 0; //starting position
    this.available_colors = ["#ef01ff","#01FF70","#01ffef"]
  };

  // Remember: prototypes are shared functions between all game instances
  Player.prototype.move = function() {
    this.position++; //increments the position by 1 each time
    return this.position; //returns the player's position
  };

  Player.prototype.changeColor = function() { //function changes color by randomly picking one of 3 available_colors
    console.log(Math.floor(Math.random() * 3))
    $('#track' +this.name+' .active').css('background-color', this.available_colors[Math.floor(Math.random() * 3)]);
  };

  // A starter Track constructor.
  function Track() {
    //Tracks the cells of the board instance
    this.$cells = $( "#track1 .position" ); //

  };

  // Start the game!
  var game = new Game();  //follows function Game()
  game.init();
  console.log(game.player1.name);

  // #################################################################################### //
  // #################################################################################### //
  // #################################################################################### //

  $(".reset").on("click", function handleClick(event){
    resetTrack();
  });

  $(".player1Color").on("click", function handleClick(event){
    game.player1.changeColor();
  });
  $(".player2Color").on("click", function handleClick(event){
    game.player2.changeColor();
  });


  //this keeps track of track length
  var trackLength = game.track1.$cells.length;
  ///start players at index 0.
  $( "body" ).keyup(function( event ) { //event listener for keyup.

    // if key is 'a' add a class of active in the css making background color red
    if ( event.keyCode == 65 ) {
      $( "#track1 .position" ).eq(game.player1.position).addClass( "active" );
      //increments player position
        // player one moves
      game.player1.move();

      if(trackLength === game.player1.position) {
        announceWinner(game.player1.name);
      }
    }
    // add active class on keyup ";"
    if ( event.keyCode == 186 ) {
      $( "#track2 .position" ).eq( game.player2.position ).addClass( "active" );
      game.player2.move();

      if(trackLength === game.player2.position){
        announceWinner(game.player2.name);
      }
    }
  })
  // this function announces winner as alert.
  function announceWinner(playerName){
    alert("Player " + playerName + " wins!");
  }

  ///this function resets the track.
  function resetTrack(){
      $( ".track .position" ).removeClass( "active" );
      game.player1.position = 0;
      game.player2.position = 0;
  }
})
