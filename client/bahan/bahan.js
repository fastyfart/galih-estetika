Meteor.subscribe('bahan');

Template.bahan.helpers({
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

Template.bahan.events({
	'mouseenter #add' : function(e,t){
		$('#add').popover({
			title : 'Tambah',
			html : true,
			content : function(){
				return $('#addForm').html();
			}
		});
	},
	'click #save' : function(e,t){
		var name = t.find('#name').value;
		var unit = t.find('#unit').value;
		var bahan = t.find('#bahan').value;
		var stok = t.find('#stok').value;

		Bahan.insert({
			name : name,
			unit : unit,
			stok : stok,
			bahan : bahan
		}, function(err){
			if(!err){
					toastr.success('Data telah dimasukan', 'Sukses');
					$('#add').popover('hide');
			}else{
				toastr.error('Error');
				$('#add').popover('hide');
			}
		});
	},
	'click .delete' : function(e,t){
		console.log(this._id);
		console.log(Bahan.findOne({_id : this._id}));
	}
});

Template.bahan.rendered = function(){

};
