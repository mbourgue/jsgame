var game = new Phaser.Game(window.pageX, window.pageY, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
  render: render
});



var grid = new Grid();



function preload() {

  // game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
  // game.load.image('background','assets/misc/starfield.jpg');

}

var button;
var background;


function create() {

  game.stage.backgroundColor = '#222';

  // background = game.add.tileSprite(0, 0, 800, 600, 'background');

  //button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

  /*  button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);*/

  //  line = new Phaser.Rectangle(50, 0, 5, 500);

  //

  grid.tracks.add('Q');
  grid.tracks.add('F');
  grid.tracks.add('L');
  grid.tracks.add('S');
  grid.tracks.add('M');

}




function update() {

  /*line.centerOn(game.input.activePointer.x, game.input.activePointer.y);
  line.rotate(0.05);*/

  grid.update();
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
