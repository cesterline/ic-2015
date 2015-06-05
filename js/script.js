$(document).ready(function() {
	//open (or close) submenu items in OC Menu. Close all the other open submenu items.
	$('.with-subs').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.oc-menu-tier-2').slideToggle(200).end().parent('.with-subs').siblings('.with-subs').children('a').removeClass('submenu-open').next('.oc-menu-tier-2').slideUp(200);
	});

	/* setting default values of disabled fields for purpose of demo only */
	$("#df-1").val("555-555-1212");
	$("#df-2").val("email@domain.com");

	/* defines margin for panel ftr select descr */
	$(".pnl-ftr select").parent("div").css("margin-left", "8px");
});