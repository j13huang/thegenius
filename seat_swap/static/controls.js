(function( controls, $, undefined ) {

  var game;
  var updater;

  controls.init = function() {
    game = window.game;
    updater = window.updater;

    $("#playerForm").submit(function (event) {
      event.preventDefault();
      console.log("Hello");
      try {
        addPlayer($(this));
      }
      finally {
        return false;
      }
    });

    $("#display").on("click", function() {
      var firstName = getRandomName();
      var lastName = getRandomName();
      game.addPlayer(firstName + " " + lastName, getRandomColor());
      game.drawPlayers();
      console.log("Clicked ");
    });
  }

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

  function addPlayer(form) {
    //game.addPlayer("ZZ", "#FFF000");
    var fullName = form.find("#fullName").val();
    //game.addPlayer("John Huang");
    if (!fullName) {
      console.log("form has no value for name");
      return;
    }

    //var addedPlayer = game.addPlayer(fullName);
    var playerData = {"fullName":fullName, "color": getRandomColor()};

    var submitButton = form.find("input[type=submit]");
    submitButton.prop('disabled', true);
    $.postJSON("/seat_swap/player/new", playerData, function(response) {
        //updater.showMessage(response);
        if (playerData.id) {
            //form.parent().remove();
            console.log(form.parent());
        } else {
            $(form)[0].reset();
            form.find("input").select();
            game.addPlayer(playerData.fullName, playerData.color);
            submitButton.prop('disabled', false);
            game.drawPlayers();
        }
    });
  }
}( window.controls = window.controls || {}, jQuery ));

$(document).ready(function () {
  window.controls.init();
});
