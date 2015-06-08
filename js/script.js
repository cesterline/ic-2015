// part 1 - screen width test - remove off canvas nav if greater than 991px
function updateContainer() {
	var container = document.getElementById( 'oc-container' )
    var $containerWidth = $(window).width();
    if ($containerWidth > 991) {
		classie.remove( container, 'oc-nav-open' );
    }
}

$(document).ready(function() {
	// open (or close) submenu items in OC Menu. Close all the other open submenu items.
	$(function() {
	    $('.with-subs').children('a.submenu-open').next('.oc-menu-tier-2').slideToggle(200).end().parent('.with-subs').siblings('.with-subs').children('a').removeClass('submenu-open').next('.oc-menu-tier-2').slideUp(200);
		$('.with-subs').children('a').on('click', function(event){
			event.preventDefault();
			$(this).toggleClass('submenu-open').next('.oc-menu-tier-2').slideToggle(200).end().parent('.with-subs').siblings('.with-subs').children('a').removeClass('submenu-open').next('.oc-menu-tier-2').slideUp(200);
		});
	});

	// part 2 - screen width test - remove off canvas nav if greater than 991px
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });

	// prevent loading link's which are labeled crnt
    $(".crnt").on('click',function(e) {
		e.preventDefault();
    });

	// defines margin for panel ftr select descr
	$(".pnl-ftr select").parent("div").css("margin-left", "8px");

	// setting default values of disabled fields for purpose of demo only
	$("#df-1").val("555-555-1212");
	$("#df-2").val("email@domain.com");

});