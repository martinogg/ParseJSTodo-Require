// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'parse',
  'bootstrap',
  'router' // Request router.js
], function($, _, Parse, Bootstrap, Router ){

  var initialize = function(){

    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
