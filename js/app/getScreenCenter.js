/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-20
* Time: 01:09 PM
*/

define(function () {
  //Set the x coordinate
  var x = document.body.clientWidth/2;
  
  //Find the y coordinate
  var y = 0;
  var offset = 0;
  //Get the scroll offset for y coordinate
  if (self.pageYOffset) // all except Explorer
  {
    offset = self.pageYOffset;
  }
  else if (document.documentElement && document.documentElement.scrollTop) // Explorer 6 Strict
  {
    offset = document.documentElement.scrollTop;
  }
  else if (document.body) // all other Explorers
  {
    offset = document.body.scrollTop;
  }
  
  //Get eh innerHeight for the y coordinate
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
  
  y = offset + (y / 2); 
  
  return {
    x: x, 
    y: y 
  };
});
