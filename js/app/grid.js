/*
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 09:04 PM
*/


define(["app/getScreenCenter", "app/coordinates", "svg.min", "app/hexagon"], function(getScreenCenter, coordinates, SVG, Hexagon) {
  var canvas = SVG('canvas')
  var centerx = getScreenCenter.x;
  var centery = getScreenCenter.y;
  var size = 30;
  var shifty = size * 3/2;
  var shiftx = Math.sqrt(3)/2* size;
  
  var grid = [];
  var griddraw = canvas.group();
  
  for (col=0;col<=9;col++) {
    for (row=0;row<=9;row++) {
      var hex = new Hexagon(centerx+(shiftx*row),centery+(shifty*col),size,col,row);
      grid.push(hex);
      griddraw.add(canvas.polygon(hex.path).fill('none').stroke({ width: 3 }));
      alert(col + ", " + row);
      
    }
  }
  
  /*
  var hex00 = new Hexagon(centerx,centery,size, 0, 0);
  
  
  //var hex00draw = canvas.polygon(hex00.path).fill('none').stroke({ width: 3 });
  griddraw.add(canvas.polygon(hex00.path).fill('none').stroke({ width: 3 }));
    
  var hex0_1 = new Hexagon(centerx+(shiftx),centery+(shifty),size);
  var hex0_1draw = canvas.polygon(hex0_1.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_1draw);
 
  var hex0_2 = new Hexagon(centerx+(shiftx*2),centery+(shifty*2),size);
  var hex0_2draw = canvas.polygon(hex0_2.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_2draw);
  
  var hex0_3 = new Hexagon(centerx+(shiftx*3),centery+(shifty*3),size);
  var hex0_3draw = canvas.polygon(hex0_3.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_3draw);
  
  var hex0_4 = new Hexagon(centerx+(shiftx*4),centery+(shifty*4),size);
  var hex0_4draw = canvas.polygon(hex0_4.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_4draw);
  
  var hex0_5 = new Hexagon(centerx+(shiftx*5),centery+(shifty*5),size);
  var hex0_5draw = canvas.polygon(hex0_5.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_5draw);
  
  var hex0_6 = new Hexagon(centerx+(shiftx*6),centery+(shifty*6),size);
  var hex0_6draw = canvas.polygon(hex0_6.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_6draw);
    
  var hex0_7 = new Hexagon(centerx+(shiftx*7),centery+(shifty*7),size);
  var hex0_7draw = canvas.polygon(hex0_7.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_4draw);
  
  var hex0_8 = new Hexagon(centerx+(shiftx*8),centery+(shifty*8),size);
  var hex0_8draw = canvas.polygon(hex0_8.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_4draw);
  
  var hex0_9 = new Hexagon(centerx-(shiftx*9),centery-(shifty*9), size);
  var hex0_9draw = canvas.polygon(hex0_9.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex0_9draw);
  
  var hex9_9 = new Hexagon(centerx+(shiftx*9),centery-(shifty*9), size);
  var hex9_9draw = canvas.polygon(hex9_9.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex9_9draw);
  
  var hex90 = new Hexagon(centerx+(shiftx*18),centery, size);
  var hex90draw = canvas.polygon(hex90.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex90draw);
  
  var hex09 = new Hexagon(centerx+(shiftx*9),centery+(shifty*9), size);
  var hex09draw = canvas.polygon(hex09.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex09draw);
  
  var hex_99 = new Hexagon(centerx-(shiftx*9),centery+(shifty*9), size);
  var hex_99draw = canvas.polygon(hex_99.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex_99draw);
  
  var hex_90 = new Hexagon(centerx-(shiftx*18),centery, size);
  var hex_90draw = canvas.polygon(hex_90.path).fill('none').stroke({ width: 3 });
  griddraw.add(hex_90draw);
  
*/
});