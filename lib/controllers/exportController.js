exportController = appController.extend({
  template : 'export',
  waitOn  : function(){
    return [
      Meteor.subscribe('customers'),
      Meteor.subscribe('products')
    ];
  },
  action : function(){
    this.render();
  }
});
