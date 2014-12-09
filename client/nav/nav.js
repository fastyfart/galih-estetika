Template.nav.events({
  'click #logout' : function(e,t){
    Meteor.logout();
  }
});
