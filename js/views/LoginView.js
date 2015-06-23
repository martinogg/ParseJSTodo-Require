define([
  'jquery',
  'underscore',
  'parse',
  'bootstrap',
  'text!templates/login.html'
], function($, _, Parse, Bootstrap, loginTemplate){

  var HomeView = Parse.View.extend({
    events: {
      "submit form.login-form": "logIn",
      "submit form.signup-form": "signUp"
    },

    el: $(".content"),

    initialize: function() {
      _.bindAll(this, "logIn", "signUp");
      this.render();
    },

    logIn: function(e) {
      var self = this;
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();
      
      Parse.User.logIn(username, password, {
        success: function(user) {
          
          self.undelegateEvents();
          delete self;
          
          Parse.history.navigate("todos", {trigger: true}); 
        },

        error: function(user, error) {
          self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
          self.$(".login-form button").removeAttr("disabled");
        }
      });

      this.$(".login-form button").attr("disabled", "disabled");

      return false;
    },

    signUp: function(e) {
      var self = this;
      var username = this.$("#signup-username").val();
      var password = this.$("#signup-password").val();
      
      Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
        success: function(user) { 
          
          self.undelegateEvents();
          delete self;
        
        	Parse.history.navigate("todos", {trigger: true});
        },

        error: function(user, error) {
          self.$(".signup-form .error").html(_.escape(error.message)).show();
          self.$(".signup-form button").removeAttr("disabled");
        }
      });

      this.$(".signup-form button").attr("disabled", "disabled");

      return false;
    },


    render: function(){
    
	var variables = { valuus: "valuus text" };
	var template = _.template( loginTemplate );
	
    this.$el.html( template(variables) );
    
      this.delegateEvents();

    
    }

  });

  return HomeView;
  
});