/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-20
* Time: 01:47 PM
*/

requirejs.config({
  shim: {
    'svg.min': {
      exports: 'SVG'
    }
  },  
  baseUrl: "js/lib",
  paths: {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      "d3": "//cdnjs.cloudflare.com/ajax/libs/d3/3.4.8/d3.min.js"
  }
});

// Load the main app module to start the app
requirejs(["app/grid"]);