function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'js/0.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}





function Level(grid) {

  this.bpm;
  this.name;
  this.author;
  this.map;

  this.time_cursor = 0;
  this.timer_tempo = new Phaser.Timer(game, false);
  //this.timer_tempo.add(995, this.step(), this)

  this.load = function(level_id) {

    this.map = loadJSON(function(response) {

    // Parse JSON string into object
      var level = JSON.parse(response);
      console.log(level);


      this.bpm = level.bpm;
      this.name = level.name;;
      this.author  = level.author;
      this.map  = level.map;

      console.log(this.map);
   });

  }


  this.step = function() {
    for (var y = 0; y < 6; y++) {
      grid.tracks.createLine(this.map[y][this.time_cursor]);
    }

    this.time_cursor++;
  }
  this.update = function() {

  }

}
