$("#nav ul li a[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
	// store hash
	var hash = this.hash;
	// animate
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 300, function() {
		// when done, add hash to url
		// (default click behaviour)
		window.location.hash = hash;
	});
});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
		target: '.navbar-fixed-top'
	})
	// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});
// Nav bar highlight depending on section
$(document).ready(function() {
	// Add scrollspy to <body>
	$('body').scrollspy({
		target: ".navbar",
		offset: 50
	});
	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
$(function() {
	jQuery('.skillbar').each(function() {
		jQuery(this).find('.skillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		}, 6000);
	});
});
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});