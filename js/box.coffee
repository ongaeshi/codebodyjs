# box.coffee
# コード入力時に出現する箱を表す、ドラッグ可能

class Box
  constructor: (value, x, y) ->
    @model = new Label(value)
    @model.x = x
    @model.y = y

