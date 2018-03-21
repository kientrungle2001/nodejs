ModuleHead = createModule({
	name: 'Kien Le', 
	setName: function(name){
		this.name=name; 
		this.$elem.run();
	}
});