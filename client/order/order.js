Template.makeOrder.helpers({
   suppliersList : function(){
      return Suppliers.find();
   },
   bahanList : function(){
      return Bahan.find();
   }
});