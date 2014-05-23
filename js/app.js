/**
* Created with hexamap.
* User: bretshack
* Date: 2014-05-20
* Time: 01:47 PM
*/

requirejs.config({
  baseUrl: "js/lib",
  paths: {
      "app": "../app",
      "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      "d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.8/d3.min"
  }
});

// Load the main app module to start the app
requirejs(["app/grid"]);