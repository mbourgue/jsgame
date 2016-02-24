var key_values = {
  'Q': {
    'id': 1,
    'color': '#ffffff'
  },
  'S': {
    'id': 2,
    'color': '#c73535'
  },
  'D': {
    'id': 3,
    'color': '#afd129'
  },
  'F': {
    'id': 4,
    'color': '#10883c'
  },
  'G': {
    'id': 5,
    'color': '#21acac'
  },
  'H': {
    'id': 6,
    'color': '#aa40d5'
  },
  'J': {
    'id': 7,
    'color': '#d14394'
  },
  'K': {
    'id': 8,
    'color': '#ffc700'
  },
  'L': {
    'id': 9,
    'color': '#ff0000'
  }
};
var padding = 50;


// Grid
function Grid() {

  this.tracks = new Tracks();

  this.update = function() { // Update all tracks
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


  this.add = function(key) { // Add one track
    this.tracks.push(new Track(key));
  }
  this.delete = function(lines) { // Delete one track

  }
  this.update = function() { // Update all the tracks
    for (track in tracks) {
      track.update();
    }
  }
  this.render = function() { // Render all the tracks

    // console.log(this.tracks);

    for (var i = 0; i < this.tracks.length; i++) {
      this.tracks[i].render();
    }

  }

}



// KEY ID: QSDFGHJKLM

// Track
function Track(key) {

  var keyboard_id;
  var Key;

  this.notes = []; // tableau de notes


  this.x;
  this.color;

  this.color = key_values[key].color;
  this.x = key_values[key].id * padding;

  this.line = new Phaser.Rectangle(this.x, 0, 5, 500);

  this.gen = function(key) {

    this.color = key_values[key].color;
    this.x = key_values[key].id * padding;

  }

  this.update = function() {

    for (note in this.notes) {
      note.update();
    }

  }

  this.render = function() {

    game.debug.geom(this.line, this.color);


  }
}






// Note
function Note() {

  this.update = function() {

  }

}

// Key
function Key(value) {
  var value = "A";

  this.push = function() {

  }
}
