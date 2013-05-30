// main.js

$(function(){
  // console.info(1, 2, 3);
});

//------------------------------------------------------------------------------
enchant();

window.onload = function(){
  var game = new Game(800, 480);

  var label = new Label('Hello, enchant.js!');
  game.rootScene.addChild(label);

  game.start();
}
