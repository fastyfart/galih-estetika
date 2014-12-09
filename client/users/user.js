Meteor.subscribe('user');

Template.users.events({
  'click #saveUser' : function(e,t){
    var username = t.find('#username').value;
    var password = t.find('#password').value;

    Accounts.createUser({
      username : username,
      password : password
    }, function(err){
      if(!err){
          console.log('account create');
      }else{
        console.log('failed');
      }
    });
  }
});

Template.usersList.helpers({
  usersList : function(){
    console.log(Meteor.users);
    return User.find();
  }
});
