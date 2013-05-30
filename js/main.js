// main.js

var SCREEN_WIDTH  = 800;
var SCREEN_HEIGHT = 480;
var OBJECT_MARGIN = 50;

//------------------------------------------------------------------------------
$(function(){
  var sGame = null;             // enchange's game object

  function initEnchant(){
    enchant();
    enchant.ENV.PREVENT_DEFAULT_KEY_CODES = []

    window.onload = function(){
      sGame = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
      sGame.start();
    }
  }

  function setupEvent(){
    $("#button-run").click(function(){
      try {
        var result = eval($("textarea").val());

        var label = new Label(result);
        label.x = Math.random() * (SCREEN_WIDTH - OBJECT_MARGIN) + OBJECT_MARGIN;
        label.y = Math.random() * (SCREEN_HEIGHT - OBJECT_MARGIN) + OBJECT_MARGIN;
        sGame.rootScene.addChild(label);

      } catch (e) {
        if (e instanceof SyntaxError) {
          alert(e.message);
        }
      }
    });
  }

  //------------------------------------------------------------------------------
  initEnchant();
  setupEvent();
});
