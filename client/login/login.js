Template.login.events({
  'click #login' : function(e,t){
    var username = t.find('#username').value;
    var password = t.find('#password').value;

    Meteor.loginWithPassword(
      username,
      password, function(err){
      if(!err){
        router.go('dashboard');
      }else{
        alert('Failed !');
      }
    });
  }
});
