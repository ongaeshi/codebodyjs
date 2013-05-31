# box.coffee
# メインループ

SCREEN_WIDTH  = 800
SCREEN_HEIGHT = 480
OBJECT_MARGIN = 50
    
class Mainloop
  constructor: () ->
    @game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT)
    @game.start()

  run: (result) ->
    box = new Box(
            result
            , Math.random() * (SCREEN_WIDTH - OBJECT_MARGIN) + OBJECT_MARGIN
            , Math.random() * (SCREEN_HEIGHT - OBJECT_MARGIN) + OBJECT_MARGIN
            );
    @game.rootScene.addChild(box.model)
    
    
    

        
  
  
