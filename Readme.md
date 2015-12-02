# bloxparty-canvas

Canvas utilities for [Blox Party](https://github.com/bloxparty/bloxparty)

## Install

`npm install bloxparty-canvas`

## API

### Canvas(element[, options])

Wrap a canvas element `element` with `options` and return the wrapper object

### wrapper.drawShape(x, y, shape, color)

Draw a single shape at `x`, `y` on the wrapped canvas.  `shape` is expected to be a Blox Party shape variant.  `color` is a hex or rgb string.

### wrapper.drawGrid(grid)

Draw a 2d Blox Party `grid` on the wrapper canvas.

### wrapper.drawText(text)

Draw `text` on the wrapped canvas element.


## License

MIT
