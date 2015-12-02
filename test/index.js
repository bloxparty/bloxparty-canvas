var shapes = require('bloxparty-shapes')
var canvas = require('../')
var availableShapes = ['S', 'T', 'Z', 'L', 'I', 'O', 'J']

drawShapeTest()
drawTextTest()
drawGridTest()

function drawShapeTest () {
  var shapeIndex = 0
  var drawShapeCanvas = document.getElementById('drawShape')
  var el = canvas(drawShapeCanvas, {
    rows: 4,
    columns: 4
  })

  function draw () {
    var shape = shapes[availableShapes[shapeIndex]]
    el.drawShape(0, 0, shape.variants[0], shape.color)
  }

  drawShapeCanvas.addEventListener('click', function (event) {
    shapeIndex = shapeIndex + 1
    if (shapeIndex >= availableShapes.length) shapeIndex = 0
    draw()
  })
  draw()
}

function drawTextTest () {
  var drawTextCanvas = document.getElementById('drawText')
  var el = canvas(drawTextCanvas)
  el.drawText('Hello World!  This text should wrap!')
}

function drawGridTest () {
  var grid = generateGrid()
  var drawGridCanvas = document.getElementById('drawGrid')
  var el = canvas(drawGridCanvas, {
    rows: 20,
    columns: 10
  })
  el.drawGrid(grid)
}

function generateGrid () {
  var rows = 20
  var cols = 10
  var grid = []
  var colors = []

  for (var shape in shapes) { colors.push(shapes[shape].color) }

  for (var x = 0; x < rows; ++x) {
    var columns = []
    for (var y = 0; y < cols; ++y) {
      columns[y] = colors[Math.floor(Math.random() * colors.length)]
    }
    grid[x] = columns
  }

  return grid
}
