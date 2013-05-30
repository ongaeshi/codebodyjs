// main.js

$(function(){
  // $('.dropdown-toggle').dropdown();
  // console.info(1, 2, 3);
});

//------------------------------------------------------------------------------
enchant();
enchant.ENV.PREVENT_DEFAULT_KEY_CODES = []

window.onload = function(){
  var game = new Game(800, 480);

  var label = new Label('Hello, enchant.js!');
  game.rootScene.addChild(label);

  game.start();
}
