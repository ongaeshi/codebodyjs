// main.js

var SCREEN_WIDTH  = 800;
var SCREEN_HEIGHT = 480;

var sGame;

$(function(){

  // console.info(1, 2, 3);

  $("#button-run").click(function(){
    try {
      var result = eval($("textarea").val());

      var label = new Label(result);
      label.x = Math.random() * SCREEN_WIDTH;
      label.y = Math.random() * SCREEN_HEIGHT;
      sGame.rootScene.addChild(label);

    } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
      }
    }
  });
});

//------------------------------------------------------------------------------
enchant();
enchant.ENV.PREVENT_DEFAULT_KEY_CODES = []

window.onload = function(){
  sGame = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

  var label = new Label('Hello, enchant.js!');
  sGame.rootScene.addChild(label);

  sGame.start();
}
