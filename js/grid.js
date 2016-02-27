var key_values = {
    'W': { 'id': 1, 'color': '#c73535', 'active_color': '#ffffff', 'key': Phaser.Keyboard.W },
    'X': { 'id': 2, 'color': '#ed9117', 'active_color': '#ffffff', 'key': Phaser.Keyboard.X },
    'C': { 'id': 3, 'color': '#afd129', 'active_color': '#ffffff', 'key': Phaser.Keyboard.C },
    'V': { 'id': 4, 'color': '#10883c', 'active_color': '#ffffff', 'key': Phaser.Keyboard.V },
    'B': { 'id': 5, 'color': '#21acac', 'active_color': '#ffffff', 'key': Phaser.Keyboard.B },
    'N': { 'id': 6, 'color': '#aa40d5', 'active_color': '#ffffff', 'key': Phaser.Keyboard.N },
    'J': { 'id': 7, 'color': '#d14394', 'active_color': '#ffffff', 'key': Phaser.Keyboard.J },
    'K': { 'id': 8, 'color': '#ffc700', 'active_color': '#ffffff', 'key': Phaser.Keyboard.K },
    'L': { 'id': 9, 'color': '#ff0000', 'active_color': '#ffffff', 'key': Phaser.Keyboard.L },
    'M': { 'id': 10, 'color': '#ffed00', 'active_color': '#ffffff', 'key': Phaser.Keyboard.M }
};
var padding = 75;



// Player
function Player() {
  this.score = 0;
  this.life = 50;

  this.setDamage = function() {

  }

  this.isDead = function() {
    if(this.life <= 0) {
      return true;
    }
    return false;
  }
}






// Grid
function Grid() {

  this.level = new Level(this);
  this.tracks = new Tracks;

  this.inPause = false;


  this.level.load(0); // Load & Interpret JSON File

  this.tracks.add('W');
  this.tracks.add('X');
  this.tracks.add('C');
  this.tracks.add('V');
  this.tracks.add('B');
  this.tracks.add('N');




  this.update = function () { // Update all tracks
    this.level.update();

    if(!this.inPause) {
      this.tracks.update();
    }
  }
  this.render = function() {  // Render
    this.tracks.render();
  }
  this.pause = function() { // Pause (boolean)
    this.inPause = !this.inPause;
  }
}


// Track Mgr
function Tracks() {

  this.tracks = [];

  this.add = function (key) { // Add one track

    var track = new Track(key);
    if(track === undefined)
      return false;
    else
      this.tracks.push(track);
  }
  this.addLine = function(array) { // Add entire line

    if(array.length != 6) {
      console.debug('invalid length of notes array'); return;
    }

    for (var i = 0; i < this.tracks.length; i++) {

      if(array[i] == 1) {
          this.tracks[i].add();
      }
    }
  }

  this.update = function () { // Update all the tracks
    for (var i = 0; i < this.tracks.length; i++) {
      this.tracks[i].update();
    }
  }
  this.render = function() {  // Render all the tracks
    for (var i = 0; i < this.tracks.length; i++) {
      this.tracks[i].render();
    }
  }

}


// Track
function Track(key) {

  var keyboard_id;

  this.notes = new Notes(this); // tableau de notes


  this.color = key_values[key].color;
  this.x = key_values[key].id * padding;


  this.line = new Phaser.Rectangle(this.x, 0, 5, 600);
  this.key = new TrackKey(this,key);


//  this.notes.add();

  this.add = function() {
    this.notes.add();
  }

  this.update = function() {
    this.notes.update();
    this.key.update();
  }

  this.render = function() {

    game.debug.geom(this.line, this.color); // Render track
    this.key.render();
    this.notes.render();
  }

}

// Notes
function Notes(track) {

  this.notes = [];


  this.update = function() {
    for (var i = 0; i < this.notes.length; i++) {
      this.notes[i].update();
    }
  }
  this.render = function() {
    for (var i = 0; i < this.notes.length; i++) {
      this.notes[i].render();
    }
  }
  this.add = function() {
    this.notes.push(new Note(track));
  }
  this.delete = function() {
    // TODO
  }
}

// Note
function Note(track) {

  this.circle = new Phaser.Circle(track.x + track.line.width/2 , -track.line.height/2, 30);
//  game.physics.enable(this.circle, Phaser.Physics.ARCADE);

  this.update = function() {

    //console.debug(4 * game.time.elapsed);
    this.circle.y += 0.3 * game.time.elapsed;


  }
  this.render = function() {
    game.debug.geom(this.circle, track.color); // Render Key
  }
}

// TrackKey is the graphical representation of your keyboard button (the circles at the bottom)
function TrackKey(track, value) {


  this.circle = new Phaser.Circle(track.x + track.line.width/2 , 500, 50);
  this.text = new Phaser.Text(game, track.x, 500, value);
  game.add.text(this.text);
  game.physics.enable(this.circle, Phaser.Physics.ARCADE);

  this.push = function() {

  }

  this.update = function() {

    // TODO: bouger ce if ailleurs
    if(track.notes.notes.length > 0 && track.notes.notes[0].circle.y > game.height) {
      track.notes.notes.splice(0,1);
    }

    //console.log(game.height);

    if (game.input.keyboard.isDown(key_values[value].key)) {

        // console.debug('push button ' + value + ', track n°' + key_values[value].id);

        track.color = key_values[value].active_color;
        this.circle.diameter = 60;
        // console.log(track.color);

        if(track.notes.notes.length > 0) {
          if(Phaser.Circle.intersects(this.circle,track.notes.notes[0].circle)) {
            player.score += 50;
            // console.log(player.score);
            track.notes.notes.splice(0,1);
          }else{
            if(player.score - 50 >= 0) {
              player.score -= 100;
            }

          }
        }



    }else{
        track.color = key_values[value].color;
        this.circle.diameter = 50;
    }


  }

  this.render = function() {
    game.debug.geom(this.circle, track.color); // Render Key


  }
}
