/*Move relative div by the fixed header height*/

var headerHeight = $('header').height();
$('.other-main').css('margin-top', headerHeight);

/*Stick footer to the bottom*/

var screenHeight = $(window).height();
var mainHeight = $('main').height();
var footerHeight = $('footer').height();
if($('html').height() < $(window).height()) {
	$('footer').css('margin-top', screenHeight-$('html').height());
}