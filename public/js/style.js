function navbar() {
	//figure out where we are and add 'active' class as needed to navbar items.
	window.location.href.indexOf('/aboutme') > -1 ? 
		document.getElementById('aboutMe').classList.add('active') : 
	window.location.href.indexOf('/projects') > -1 ? 
		document.getElementById('projects').classList.add('active') : 
			document.getElementById('home').classList.add('active');
};

function cardClick() {
	$(".ui.card").click(function() {
		window.location = $(this).find("a").attr("href");
		return false;
	});
};

function startStyle() {
	navbar();
	cardClick();1
};