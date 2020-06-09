var container = document.getElementById("container");
var buttons = document.getElementsByClassName('button');
$(function() {
	$("div.button").bind("taphold", function(event) {
		$(event.target).addClass("taphold");
	}).end().
	$("div.button").bind("tap", function(event) {
		alert("check");
	})
});

