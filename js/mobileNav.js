var toggled = false;

$(document).ready(function(){
	$('#mobileNavIcon').click(function(){
		$(this).toggleClass('open');
		$('.navbarMobile').slideToggle();
		if (toggled === false) {
			toggled = true;
			$(this).css({marginTop: '+=225px'});
		} else {
			toggled = false;
			$(this).css({marginTop: '-=225px'})};
	});
});