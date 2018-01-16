//Animate SVGs don't seem to like to animate on refresh. This forces that animation on F5.

function logoRefresh() {
	var svgSource = $('#foxHeadAnimata').attr('src'); //get the source in the var

	$('#foxHeadAnimata').attr('src', ""); //erase the source
	$('#foxHeadAnimata').attr('src', svgSource + '?' + new Date().getTime()); //add the date to the source of the image to force new anim
};