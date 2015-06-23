// Author: Thomas Davis
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'https://code.jquery.com/jquery-2.1.4.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
    parse: 'http://www.parsecdn.com/js/parse-1.4.2.min',
    templates: '../templates'

  },
  
  shim: {
     parse: {
        exports: 'Parse',
        deps: ["jquery"]
     }
    ,
     bootstrap: {
        exports: '$.fn.popover',
        deps: ["jquery"]
     },
     underscore: {
        exports: '_'
     }, 
     jquery: {
        exports: '$'
     }
  }



});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
