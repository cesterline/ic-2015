$(document).ready(function() {
	/* solve for ie8's lack of support for pseudo selectors */
	$('#utility > .inline-list > ul > li:last-child').css({ "border-right-width": "1px", "margin-right": "0" });
	$('#channels .btn-group:last-of-type').css({ "background": "none" });
	$('#legal > ul > li:last-child').css({ "padding-right": "0", "margin-right": "0" });
	$('.table-striped > tbody > tr:nth-of-type(odd)').css({ "background-color": "#f9f9f9" });
});