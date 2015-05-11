$(document).ready(function() {

	/* solve for ie8's lack of support for pseudo selectors */
	$('#utility > .inline-list > ul > li:last-child').css({ "border-right-width": "1px", "margin-right": "0" });
	$('#channels .btn-group:last-of-type').css({ "background": "none", "padding-left": "0" });
	$('#legal > ul > li:last-child').css({ "padding-right": "0", "margin-right": "0" });

});