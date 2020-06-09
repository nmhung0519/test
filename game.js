var container = document.getElementById("container");
var buttons = document.getElementsByClassName('button');
$(document).taphold(function(event) {
	
});
$(function() {
	$("div.button").bind("taphold", function(event) {
		event.preventDefault();
		$(event.target).addClass("taphold");
	})
	$("div.button").bind("tap", function(event) {
		event.preventDefault();
		let lv = event.target.id;
	})
});
