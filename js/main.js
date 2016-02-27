// GAME OBJECT
var game = new Phaser.Game(window.pageX, window.pageY, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
  render: render
});


var grid;
var gui;
var player;
var skillbar;

//  The Google WebFont Loader
WebFontConfig = {
  //  The Google Fonts we want to load (specify as many as you like in the array)
  google: {
    families: ['Quicksand']
  }

};

// var guiScore = new GuiScore();

function preload() {

  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  grid = new Grid;
  player = new Player;
  gui = new Gui;
  skillbar = new SkillBar();

  game.load.image('cadran', 'img/cadran.png');
  game.load.image('aiguille', 'img/aiguille.png');

  gui.createScore();
}




function create() {

  game.stage.backgroundColor = '#111';

  // timer provisoire
  game.time.events.loop(grid.level.datas.bpm, grid.level.step, grid.level);

  skillbar.create();
}




function update() {

  grid.update();
  gui.update();
  skillbar.update();
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
