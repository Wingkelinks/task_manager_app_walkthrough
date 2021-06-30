$(document).ready(function () {
	$(".sidenav").sidenav({ edge: "right" }); // Materialize sidenav init

	$(".collapsible").collapsible(); // Materialize collapsible init
	$(".tooltipped").tooltip();
	// Materialize drop down form select init
	$("select").formSelect();
	// Materialize Datepicker
	// Formatted to match database format
	$(".datepicker").datepicker({
		format: "dd mmmm, yyyy",
		yearRange: 3,
		showClearBtn: true,
		i18n: {
			done: "Select",
		},
	});
});
