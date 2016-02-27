// GAME OBJECT
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
  render: render
});


var grid;
var gui;
var player;

//  The Google WebFont Loader
WebFontConfig = {
  //  The Google Fonts we want to load (specify as many as you like in the array)
  google: {
    families: ['Quicksand']
  }

};


function preload() {

  game.forceSingleUpdate = true;
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  grid = new Grid;
  player = new Player;
  gui = new Gui;


  gui.createScore();
}




function create() {

  game.stage.backgroundColor = '#111';


  // timer provisoire
  game.time.events.loop(grid.level.getBPMinMS(), grid.level.step, grid.level);

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
