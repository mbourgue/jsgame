function Gui() {
  this.createScore = function() {
    this.text = game.add.text(625, game.world.centerY + 100, player.score);
    this.text.anchor.setTo(0.5);
    this.text.font = 'Quicksand';
    this.text.align = 'center';
    this.text.fill = "#fff";
    this.text.setShadow(0, 3, 'rgba(0,0,0,0.5)', 5);

    this.text.inputEnabled = true;
    this.text.input.enableDrag();

  /*  this.text.events.onInputOver.add(over, this);
    this.text.events.onInputOut.add(out, this);*/
  }

  this.update = function() {
    this.text.setText(player.score);
  }

}
