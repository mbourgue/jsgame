// GAME OBJECT
var game = new Phaser.Game(window.pageX, window.pageY, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
  render: render
});



//  The Google WebFont Loader
WebFontConfig = {
  //  The Google Fonts we want to load (specify as many as you like in the array)
  google: {
    families: ['Quicksand']
  }

};

var grid = new Grid();
var gui = new Gui();
// var guiScore = new GuiScore();

function preload() {

  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  gui.createScore();
}

var player = new Player();


function create() {

  game.stage.backgroundColor = '#111';


  grid.level.load(0);

  grid.tracks.add('W');
  grid.tracks.add('X');
  grid.tracks.add('C');
  grid.tracks.add('V');
  grid.tracks.add('B');
  grid.tracks.add('N');
  // grid.tracks.add('J');
  // grid.tracks.add('K');
  // grid.tracks.add('L');
  // grid.tracks.add('M');

  // timer provisoire
  game.time.events.loop(500, grid.level.step, grid.level);

}




function update() {

  grid.update();
  gui.update();
}

function render() {

  grid.render();

}



function up() {
  console.log('button up', arguments);
}

function over() {
  console.log('button over');
}

function out() {
  console.log('button out');
}

function actionOnClick() {

  background.visible = !background.visible;

}
