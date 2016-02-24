var key_value =
[
    'Q',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M'
];


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


  this.add = function (lines) { // Add one track
    this.tracks.push(new Track());
  }
  this.delete = function (lines) { // Delete one track

  }

  this.update = function () {
    for(track in tracks) {
      track.update();
    }
  }

  this.render = function() {

    console.log(this.tracks);

    for(track in this.tracks) {
      track.render();
    }

  }

}



// KEY ID: QSDFGHJKLM

// Track
function Track() {

  var keyboard_id;
  var Key;

  this.notes = []; // tableau de notes


  this.line = new Phaser.Rectangle(50, 0, 5, 500);
  this.color = "#FFF";


  this.update = function() {

    for(note in this.notes) {
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
