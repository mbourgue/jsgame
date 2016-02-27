function loadJSON() {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'js/levels/0.json', false);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    //  callback(xobj.responseText);

  //  console.debug(JSON.parse(xobj.responseText));

    }
  };
  xobj.send(null);

  return JSON.parse(xobj.responseText);
}


function Level(grid) {

  this.datas = {
    bpm: 120
  /*  getBPMinMS: function() {
      return 120;
    }*/
  };

  this.self = this;

  this.time_cursor = 0;
  /*this.timer_tempo = new Phaser.Timer(game, false);
  this.timer_tempo.loop(995, this.step, this);
  this.timer_tempo.start(1000);*/

  this.load = function(level_id) { // Load the level

    this.datas = loadJSON();


    //self.datas = this.datas;
   console.debug(this.datas);
  }


  this.step = function() {
    if(this.time_cursor < this.datas.map[0].length) {

      var line = [];
      for (var y = 0; y < 6; y++) {
        line.push(this.datas.map[y][this.time_cursor]);
      }
      grid.tracks.addLine(line);

      this.time_cursor++;
    }


    // console.debug(this.datas + 'step!');
  }
  this.update = function() {
  //  this.timer_tempo



  }

}
