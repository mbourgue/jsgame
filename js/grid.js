var key_values = {
    'Q': { 'id': 1, 'color': '#ffffff', 'active_color': '#e3e3e3', 'key': Phaser.Keyboard.Q },
    'S': { 'id': 2, 'color': '#c73535', 'active_color': '#a22929', 'key': Phaser.Keyboard.S },
    'D': { 'id': 3, 'color': '#afd129', 'active_color': '#ffffff', 'key': Phaser.Keyboard.D },
    'F': { 'id': 4, 'color': '#10883c', 'active_color': '#ffffff', 'key': Phaser.Keyboard.F },
    'G': { 'id': 5, 'color': '#21acac', 'active_color': '#ffffff', 'key': Phaser.Keyboard.G },
    'H': { 'id': 6, 'color': '#aa40d5', 'active_color': '#ffffff', 'key': Phaser.Keyboard.H },
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

  this.tracks = new Tracks();

  this.inPause = false;



  this.update = function () { // Update all tracks
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
  this.delete = function (lines) { // Delete one track
    //this.tracks.splice(,1);
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


  this.notes.add();

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

  this.circle = new Phaser.Circle(track.x + track.line.width/2 , 10, 30);
  game.physics.enable(this.circle, Phaser.Physics.ARCADE);

  this.update = function() {
    this.circle.y += 2;
  }
  this.render = function() {
    game.debug.geom(this.circle, track.color); // Render Key
  }
}

// Key
function TrackKey(track, value) {


  this.circle = new Phaser.Circle(track.x + track.line.width/2 , 500, 50);
  this.text = new Phaser.Text(game, track.x, 500, value);
  game.add.text(this.text);
  game.physics.enable(this.circle, Phaser.Physics.ARCADE);

  this.push = function() {

  }

  this.update = function() {

    if (game.input.keyboard.isDown(key_values[value].key)) {
        track.color = key_values[value].active_color;
        this.circle.diameter = 60;
        // console.log(track.color);
        
        if(Phaser.Circle.intersects(this.circle,track.notes.notes[0].circle)) {
          player.score += 50;   console.log(player.score);

        }else{
          player.score -= 50;
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
