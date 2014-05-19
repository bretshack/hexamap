/*
* Created with hexamap.
* User: bretshack
* Date: 2014-05-19
* Time: 09:04 PM
*/

var grid = SVG("grid");
var centerx = getScreenCenterX();
var centery = getScreenCenterY();

var hex = grid.polygon(coordinates(centerx,centery,20,6)).fill('none').stroke({ width: 3 });

function getScreenCenterY() {
  var y = 0;
  y = getScrollOffset()+(getInnerHeight()/2);
  return(y);
}
 
function getScreenCenterX() {
  return(document.body.clientWidth/2);
}
 
function getInnerHeight() {
  var y;
  if (self.innerHeight) // all except Explorer
  {
    y = self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientHeight) // Explorer 6 Strict Mode
  {
    y = document.documentElement.clientHeight;
  }
  else if (document.body) // other Explorers
  {
    y = document.body.clientHeight;
  }
  return(y);
}
 
function getScrollOffset() {
  var y;
  if (self.pageYOffset) // all except Explorer
  {
    y = self.pageYOffset;
  }
  else if (document.documentElement && document.documentElement.scrollTop) // Explorer 6 Strict
  {
    y = document.documentElement.scrollTop;
  }
  else if (document.body) // all other Explorers
  {
    y = document.body.scrollTop;
  }
  return(y);
}
