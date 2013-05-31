// main.js

$(function(){
  var mainLoop = null;

  function initEnchant(){
    enchant();
    enchant.ENV.PREVENT_DEFAULT_KEY_CODES = []

    window.onload = function(){
      mainLoop = new Mainloop();
    }
  }

  function setupEvent(){
    $("#button-run").click(function(){
      try {
        var result = eval($("textarea").val());
        mainLoop.run( result );
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
