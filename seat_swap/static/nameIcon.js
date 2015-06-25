(function( game, $, undefined ) {
  game.NameIcon = function(data) {
    this.firstName;// = data.firstName;
    this.lastName;// = data.lastName;
    this.parseName(data.name.toUpperCase());
    this.color = data.color;
    this.x = 0;
    this.y = 0;
  };

  game.NameIcon.prototype = {
    parseName:function(name) {
      if (name.includes(" ")) {
        var names = name.split(" ");
        this.firstName = names.shift();
        this.lastName = names.join(" ");
      }
      else if (name.length == 0){
        this.firstName = "-";
        this.lastName = "-";
      }
      else if (name.length == 1){
        this.firstName = name;
        this.lastName = ".";
      }
      else {
        this.firstName = name[0];
        this.lastName = name[1];
      }
    },
    setPosition:function(x, y) {
      this.x = x;
      this.y = y;
    },
    getFullName:function() {
      return this.firstName + " " + this.lastName;
    },
    getInitials:function() {
      return this.firstName[0] + this.lastName[0];
    },
  };

}( window.game = window.game || {}, jQuery ));
