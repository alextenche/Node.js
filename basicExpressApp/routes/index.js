exports.index = function (req, res) {
	res.render('default',  {
		title: 'Home',
		classname: 'home',
		users: ['Alex', 'Blade', 'LexuCuFlexu']
	});
}

exports.about = function (req, res) {
	res.render('default',  {
		title: 'About',
		classname: 'about'
	});
}