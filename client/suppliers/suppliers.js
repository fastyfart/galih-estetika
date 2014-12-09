Session.setDefault('newRow', false);

Template.suppliers.events({
  'click #newSupps' : function(e,t){
    Session.set('newRow', true);
  },
  'click #saveNewSupp' : function(e,t){
    var supplier = t.find('#newSupp').value;
    var contact = t.find('#newContact').value;

    Suppliers.insert({
      supplier : supplier,
      contact : contact
    }, function(err){
      if(!err){
        Session.set('newRow', false);
        toastr.success('Data telah disimpan');
      }else{
        toastr.error('Error');
      }
    });
  }
});

Template.suppliers.helpers({
  newRow : function(){
    return Session.get('newRow');
  },
  suppliersList : function(){
    return Suppliers.find();
  }
});
