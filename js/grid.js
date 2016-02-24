var key_values = {
    'Q': { 'id': 1, 'color': '#ffffff', 'key': Phaser.Keyboard.Q },
    'S': { 'id': 2, 'color': '#c73535', 'key': Phaser.Keyboard.S },
    'D': { 'id': 3, 'color': '#afd129', 'key': Phaser.Keyboard.D },
    'F': { 'id': 4, 'color': '#10883c', 'key': Phaser.Keyboard.F },
    'G': { 'id': 5, 'color': '#21acac', 'key': Phaser.Keyboard.G },
    'H': { 'id': 6, 'color': '#aa40d5', 'key': Phaser.Keyboard.H },
    'J': { 'id': 7, 'color': '#d14394', 'key': Phaser.Keyboard.J },
    'K': { 'id': 8, 'color': '#ffc700', 'key': Phaser.Keyboard.K },
    'L': { 'id': 9, 'color': '#ff0000', 'key': Phaser.Keyboard.L },
    'M': { 'id': 10, 'color': '#ffed00', 'key': Phaser.Keyboard.M }
};
var padding = 75;


// Grid
function Grid() {

  this.tracks = new Tracks();

  this.update = function () { // Update all tracks
    this.tracks.update();


  }
  this.pause = function() {

  }
  this.render = function() {
    this.tracks.render();
  }



}


// Track Mgr
function Tracks() {

  this.tracks = [];


  this.add = function (key) { // Add one track
    this.tracks.push(new Track(key));
  }
  this.delete = function (lines) { // Delete one track

  }
  this.update = function () { // Update all the tracks
    for (var i = 0; i < this.tracks.length; i++) {
      this.tracks[i].update();
    }


  }
  this.render = function() {  // Render all the tracks

    // console.log(this.tracks);

    for (var i = 0; i < this.tracks.length; i++) {
         this.tracks[i].render();
    }

  }

}



// Track
function Track(key) {

  var keyboard_id;

  this.notes = []; // tableau de notes


  this.color = key_values[key].color;
  this.x = key_values[key].id * padding;


  this.line = new Phaser.Rectangle(this.x, 0, 5, 500);
  this.key = new TrackKey(this,key);


  this.update = function() {
    for(note in this.notes) {
      note.update();
    }

    this.key.update();
  }

  this.render = function() {

    game.debug.geom(this.line, this.color); // Render track
    this.key.render();

  }

}






// Note
function Note() {

  this.update = function() {

  }

}

// Key
function TrackKey(track, value) {


  this.circle = new Phaser.Circle(track.x + track.line.width/2 , 500, 50);
  this.text = new Phaser.Text(game, track.x, 500, value);
  game.add.text(this.text);


  this.push = function() {

  }

  this.update = function() {

    if (game.input.keyboard.isDown(key_values[value].key))
    {
        /*ufo.x -= speed;
        ufo.angle = -15;
        leftBtn.alpha = 0.6;*/
        track.color = '#000';
        console.log(track.color);
    }else{
        track.color = key_values[value].color;
    }
  }

  this.render = function() {
    game.debug.geom(this.circle, track.color); // Render Key


  }
}
