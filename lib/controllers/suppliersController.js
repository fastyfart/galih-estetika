suppliersController = appController.extend({
  template : 'suppliers',
  waitOn : function(){
    return Meteor.subscribe('suppliers');
  },

  action : function(){
    this.render();
  }
});
