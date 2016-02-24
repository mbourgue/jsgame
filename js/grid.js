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
    'M',
];


// Grid
function Grid() {

  var tracks;

  this.update = function () { // Update all tracks
    tracks.update();
  }
  this.pause = function() {

  }

}


// Track Mgr
function Tracks() {

  var tracks = [];


  this.add = function (lines) { // Add one track

  }
  this.delete = function (lines) { // Delete one track

  }

  this.update = function () {
    for(track in tracks) {
      track.update();
    }
  }
  // this. = function () {
  //
  // }
}



// KEY ID: QSDFGHJKLM

// Track
function Track() {

  var keyboard_id;
  var Key;

  var notes = []; // tableau de notes


  var line = new Phaser.Rectangle(50, 0, 5, 500);
  var color = "#FFF";


  this.update = function() {

    for(note in notes) {
      note.update();
    }

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
