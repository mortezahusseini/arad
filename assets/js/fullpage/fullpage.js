$(document).ready(function() {
	/* FullPage.JS*/ 
	$('#fullpage').fullpage({
		menu: '#fullpage__menu',
		anchors: ['a-section-1', 'a-section-2', 'a-section-3'],
		loopHorizontal: false,
		verticalCentered: false,
		controlArrows: false,
		slidesNavigation: true,
	});
	
	// Menu active toggle 
	$('#fullpage__menu').click(function() {
		$(this).toggleClass('is-active');
		$('#fullpage').toggleClass('menu-is-active')
	});
});