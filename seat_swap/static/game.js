(function( game, $, undefined ) {
  //Private Property
  var canvas = $("#seats")[0];
  var context = canvas.getContext("2d");
  var ICON_SIZE = 50;

  //Public Property
  game.players = 0;
  game.stringLength = 0;
  game.nameIcons = [];

  //Public Method
  game.init = function(players, stringLength) {
    game.players = players;
    game.stringLength = stringLength;
  };

  game.addPlayer = function(name) {
    game.nameIcons.push(new game.NameIcon(name));
  };

  game.clicked = function() {
    game.addPlayer(getRandomName());
    clear();
    drawPlayers();
    console.log("Clicked ");
  };
  $("#display").on("click", game.clicked);

  //Private Method
  function getRandomName() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var name = '';
    name += letters[Math.floor(Math.random() * 26)];
    name += letters[Math.floor(Math.random() * 26)];
    return name;
  }

  function clear() {
    canvas.width = canvas.width;
  }

  function drawPlayers() {
    for (var i = 0; i < game.nameIcons.length; i++ ) {
      // Clockwise quadrant where top right is quadrant 0
      var position = getDrawPosition(i, game.nameIcons.length);
      var nameIcon = game.nameIcons[i];
      drawPlayer(position[0], position[1], nameIcon);
    }
    console.log("Drawing");
  }

  function getDrawPosition(i, total) {
    var middle_x = canvas.width / 2 - 30;
    var middle_y = canvas.height / 2 - 30;
    var radius = (canvas.width / 2) - 80;
    var x = radius * Math.cos((i / total) * 2 * Math.PI);
    var y = radius * Math.sin((i / total) * 2 * Math.PI);

    console.log("middle_x: " + middle_x + ", x: " + x);
    return [middle_x + x, middle_y + y];
  }

  function drawPlayer(x, y, nameIcon) {
    context.fillStyle = nameIcon.color;
    context.fillRect(x, y, ICON_SIZE, ICON_SIZE);
    context.fillStyle = "#FFFFFF";
    context.fillStyle = "#000000";
    context.font = "30px Verdana";
    console.log("drawing player: " + nameIcon.name + " with color: " + nameIcon.color + " at x: " + x + ", y: " + y)
    context.fillText(nameIcon.name, x + 5, y + 35);
  }

  // class nameIcon
  game.NameIcon = function(name) {
    this.name = name;
    this.color = this.getRandomColor();
  };

  game.NameIcon.prototype = {
    getRandomColor:function() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#AA';
      for (var i = 0; i < 4; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      console.log("random color generated: " + color);
      return color;
    }
  };

}( window.game = window.game || {}, jQuery ));
