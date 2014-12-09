requestController = appController.extend({

  template : 'request',

  waitOn : function(){

    return [
      Meteor.subscribe('customers'),
      Meteor.subscribe('products'),
    ];
  },

  action : function(){
    this.render();
  }
});
