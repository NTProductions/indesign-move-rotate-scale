var layer = app.activeDocument.activeLayer;
var rects = layer.rectangles;

var rect = rects[0];

rect.move([500, 500]);
rect.horizontalScale*=2;
rect.verticalScale*=2;
rect.rotationAngle=45;