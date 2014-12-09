Meteor.publish('bahan', function(){
	return Bahan.find();
});
