Session.setDefault('serelek', false);
Session.setDefault('serelekNd', false);

Template.customersList.helpers({
  customers : function(){
    return Customers.find();
  }
});

Template.request.helpers({
  serelek : function(){
    return Session.get('serelek');
  }
});

Template.request.events({
  'mouseenter #addCustomer' : function(e,t){
    $('#addCustomer').popover({
      title : 'Konsumen',
      html : true,
      placement : 'bottom',
      content : function(){
        return $('#addCustomerForm').html();
      }
    });
  },
  'click #saveNewCustomer' : function(e,t){
    var customer = t.find('#customer').value;
    var contact = t.find('#cp').value;
    var address = t.find('#address').value;
    console.log(customer);

    Customers.insert({
      customer: customer,
      contact : contact,
      address : address
    }, function(err){
      if(!err){
        $('#addCustomer').popover('hide');
        toastr.success('Data telah disimpan');
      }else{
        toastr.error('Error');
      }
    });
  },
  'click #serelek' : function(e,t){
    var serelek = Session.get('serelek');
    if(serelek === true){
      Session.set('serelek', false);
    }else{
      Session.set('serelek', true);
    }
  }
});

Template.makeRequest.helpers({
  products : function(){
    return Products.find();
  },
  customers : function(){
    return Customers.find();
  },
  serelekNd : function(){
    return Session.get('serelekNd');
  }

});

Template.makeRequest.events({

  'click #serelekNd' : function(e,t){
    var serelekNd = Session.get('serelekNd');
    if(serelekNd === true){
      Session.set('serelekNd', false);
    }else{
      Session.set('serelekNd', true);
    }
  },
  'click #saveRequest' : function(e,t){
    var customer = t.find('#customerReq').value;
    var product = t.find('#productReq').value;
    var qty = t.find('#qtyReq').value;
    var note = t.find('#noteReq').value;

    Customers.update({_id : customer}, {$push : {
      requests : {
        'product' : product,
        'qty' : qty,
        'note' : note,
        'date' : new Date()
      }
    }}, function(err){
      if(!err){
        toastr.success('Data telah dimasukan');
      }else{
        toastr.error('Error');
      }
    });
  }
});

Template.requestsList.helpers({
  requestsList: function(){
    var v = Customers.find();
    v.forEach(function(val){
      console.log('fuck');
      console.log(val.requests);
    });
    return Customers.find();
  },
});
