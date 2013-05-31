# box.coffee
# コード入力時に出現する箱を表す、ドラッグ可能

class Box
  constructor: (value, x, y) ->
  
    @model = new Group()
    @model.x = x
    @model.y = y

    ball = new Sprite(50, 25);
    surface = new Surface(50, 20)
    surface.context.fillStyle = '#f0f0f0'
    surface.context.fillRect(0, 0, 50, 50)
    ball.image = surface
    @model.addChild(ball)

    label = new Label(value)
    label.font = "16px Palatino"
    @model.addChild(label)


