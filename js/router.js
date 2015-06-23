// Filename: router.js
define([
  'jquery',
  'underscore',
  'parse',
  'bootstrap',
  'views/LoginView',
  'views/TodosView'  
], function($, _, Parse, Bootstrap, LoginView, TodosView) {
  
  var AppRouter = Parse.Router.extend({
    routes: {
		'login' : 'showLoginView',
		'todos' : 'showTodosView',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  
  var initialize = function(){
     	    
  console.log("Stage 00 Init parse in router.js");
  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("IeGKcreB3bO9EFjOpcxp69vF0EhougAzYIwZJCiO",
                   "q7NmxcTRetpfyjTyWlJlN826gN9OathL1pFSSSsv");


    var app_router = new AppRouter;

    app_router.on('route:showLoginView', function () {
		if (Parse.User.current())
		{
			// already logged in.  Go to show todos
			this.navigate("todos", {trigger: true});
		}
		else
		{
        	var loginView = new LoginView();
	        loginView.render();
        }
    });

    app_router.on('route:showTodosView', function () {
    	if (Parse.User.current())
		{
        	var todosView = new TodosView();
	        todosView.render();
		}
		else
		{
			// not logged in, go to login screen instead
			this.navigate("login", {trigger: true});
        }
    });

    app_router.on('route:defaultAction', function (actions) {

        if (!Parse.User.current())
        {
        	this.navigate("login", {trigger: true});
        }
        else
        {
			this.navigate("todos", {trigger: true});        
        }
    });

    Parse.history.start();
  };
  return { 
    initialize: initialize
  };
});
