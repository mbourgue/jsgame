var game = new Phaser.Game(window.pageX, window.pageY, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
  render: render
});

/*

function GuiScore() {

}
*/


//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {

  //  'active' means all requested fonts have finished loading
  //  We set a 1 second delay before calling 'createText'.
  //  For some reason if we don't the browser cannot render the text the first time it's created.
  // active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

  //  The Google Fonts we want to load (specify as many as you like in the array)
  google: {
    families: ['Quicksand']
  }

};


var grid = new Grid();

var gui = new Gui();





// var guiScore = new GuiScore();

function preload() {

  // game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
  // game.load.image('background','assets/misc/starfield.jpg');
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');



  gui.createScore();
//
}

var button;
var background;

var player = new Player();


function create() {

  game.stage.backgroundColor = '#111';

  // background = game.add.tileSprite(0, 0, 800, 600, 'background');

  //button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

  /*  button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);*/

  //  line = new Phaser.Rectangle(50, 0, 5, 500);

  //

  grid.tracks.add('Q');
  grid.tracks.add('S');
  grid.tracks.add('D');
  grid.tracks.add('F');
  grid.tracks.add('G');
  grid.tracks.add('H');
  // grid.tracks.add('J');
  // grid.tracks.add('K');
  // grid.tracks.add('L');
  // grid.tracks.add('M');


}




function update() {

  /*line.centerOn(game.input.activePointer.x, game.input.activePointer.y);
  line.rotate(0.05);*/

  grid.update();
  gui.update();
}

function render() {

  grid.render();

  /*game.debug.lineInfo(line, 32, 32);*/

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
