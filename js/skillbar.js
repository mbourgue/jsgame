//Skill bar
function SkillBar() {
  this.cadran;
  this.aiguille;
  this.angle = -45;
  this.position = {
    x: 500,
    y: 200
  };

  this.create = function() {
    this.cadran = game.add.sprite(this.position.x, this.position.y, 'cadran');
    this.cadran.scale.setTo(0.5);

    this.aiguille = game.add.sprite(0, 0, 'aiguille');
    this.aiguille.anchor.setTo(0.5, 0.8);
    this.aiguille.position.x = this.position.x + this.cadran.width / 2;
    this.aiguille.position.y = this.position.y + this.cadran.height / 2;
    this.aiguille.angle = this.angle;
    this.color.update();
  }

  this.input = {
    fail: function() {
      if (skillbar.angle >= -89) {
        skillbar.angle -= 1;
        skillbar.color.update();
      }
    },
    success: function() {
      if (skillbar.angle <= 85) {
        skillbar.angle += 5;
        skillbar.color.update();
      }
    }
  };

  this.update = function() {
    this.aiguille.angle = this.angle;
  }

  this.color = {
    rgbToHex: function(r, g, b) {
      return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    update: function() {
      skillbar.aiguille.tint = this.rgbToHex(255 - 255*(skillbar.angle+90)/180,255*(skillbar.angle+90)/180, 0);
    }
  };
}
