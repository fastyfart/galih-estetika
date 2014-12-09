orderController = appController.extend({
  template : 'order',

  waitOn : function(){
    return [
      Meteor.subscribe('suppliers'),
      Meteor.subscribe('bahan')
    ];
  },

  action : function(){
    this.render();
  }
});
