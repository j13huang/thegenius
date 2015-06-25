(function( game, $, undefined ) {
  //Private Property
  var canvas;// = $("#seats")[0];
  var context;// = canvas.getContext("2d");
  var ICON_SIZE = 50;

  //Public Property
  game.players = 0;
  game.stringLength = 0;
  game.nameIcons = [];

  //Public Method
  game.init = function() {
    canvas = $("#seats")[0];
    context = canvas.getContext("2d");
    game.players = parseInt($("#players").text());
    game.stringLength = parseInt($("#stringLength").text());
  };

  game.addPlayer = function(name, color) {
    console.log("adding player");
    if (typeof name == "undefined") {
      name = "--";
      console.log("UNDEFINED NAME IN ADDPLAYER");
    }
    if (typeof color == "undefined") {
      //console.log(color);
      color = "#000000";
      console.log("UNDEFINED COLOR IN ADDPLAYER");
    }
    var newPlayer = new game.NameIcon({'name':name, 'color':color})
    game.nameIcons.push(newPlayer);
    //drawPlayers();
    return newPlayer;
  };

  game.setPlayers = function(data) {
    game.nameIcons = [];
    for (var i = 0; i < data.length; i++ ) {
      game.nameIcons.push(new game.NameIcon(data[i]));
    }
    //game.drawPlayers();
    return game.nameIcons;
  };

  game.drawPlayers = function() {
    clear();
    for (var i = 0; i < game.nameIcons.length; i++ ) {
      // Clockwise quadrant where top right is quadrant 0
      var position = getDrawPosition(i, game.nameIcons.length);
      var nameIcon = game.nameIcons[i];
      drawPlayer(position[0], position[1], nameIcon);
    }
    console.log("Drawing");
  }

  //Private Method
  function getRandomName() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var name = '';
    name += letters[Math.floor(Math.random() * 26)];
    name += letters[Math.floor(Math.random() * 26)];
    return name;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var r = letters[Math.floor(Math.random() * 9) + 7] + letters[Math.floor(Math.random() * 9) + 7];
    var g = letters[Math.floor(Math.random() * 4)] + letters[Math.floor(Math.random() * 4)];
    var b = letters[Math.floor(Math.random() * 9 + 7)] + letters[Math.floor(Math.random() * 9) + 7];
    //for (var i = 0; i < 4; i++ ) {
        //color += letters[Math.floor(Math.random() * 16)];
    //}
    var color = "#" + r + g + b;
    console.log("random color generated: " + color);
    return color;
  }

  function clear() {
    canvas.width = canvas.width;
  }

  function getDrawPosition(i, total) {
    var center_x = canvas.width / 2 - 30;
    var center_y = canvas.height / 2 - 30;
    var radius = (canvas.width / 2) - 80;
    var x = radius * Math.cos((i / total) * 2 * Math.PI);
    var y = radius * Math.sin((i / total) * 2 * Math.PI);

    console.log("center_x: " + center_x + ", x: " + x);
    return [center_x + x, center_y + y];
  }

  function drawPlayer(x, y, nameIcon) {
    context.fillStyle = nameIcon.color;
    context.fillRect(x, y, ICON_SIZE, ICON_SIZE);
    context.fillStyle = "#FFFFFF";
    context.fillStyle = "#000000";
    context.font = "30px Verdana";
    console.log("drawing player: " + nameIcon.getFullName() + " with color: " + nameIcon.color + " at x: " + x + ", y: " + y)
    context.fillText(nameIcon.getInitials(), x + 5, y + 35);
  }

}( window.game = window.game || {}, jQuery ));

$(document).ready(function () {
  window.game.init();
});
