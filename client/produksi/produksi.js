Meteor.subscribe('products');

Template.produksi.helpers({

  'bahanList' : function(){
    return Bahan.find();
  },
  'bahanMentah' : function(bahan){
    if(bahan === 'mentah'){
      return true;
    }else{
      return false;
    }
  },
  'bahanOlah' : function(bahan){
    if(bahan === 'olah'){
      return true;
    }else{
      return false;
    }
  }

});

Template.produksi.events({

  'mouseenter #addProduct' : function(e,t){
    $('#addProduct').popover({
      title : 'Tambah Produk',
      html : true,
      content : function(){
        return $('#addProductForm').html();
      }
    });
  },
  'click #saveProduct' : function(e,t){
    var product = t.find('#product').value;
    var unit = t.find('#unit').value;
    var stok = t.find('#stok').value;

    Products.insert({
      product : product,
      unit : unit,
      stok : stok
    }, function(err){
      if(!err){
        toastr.success('Data telah dimasukan');
        $('#addProduct').popover('hide');
      }else{
        toastr.error('Error');
      }
    });
  }

});

Template.productsList.helpers({
  'productsList' : function(){
    return Products.find();
  }
});
