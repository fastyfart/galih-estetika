appController = RouteController.extend({
  layoutTemplate : 'layout',

  onBeforeAction : function(){
    if(!Meteor.userId()){
    //  route.go('login');
      this.render('login');
    }else{
      this.next();
    }
  }
});
