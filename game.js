var container = document.getElementById("container");
var buttons = document.getElementsByClassName('button');
$(document).taphold(function(event) {
	
});
$("div.button").bind("touchstart", function(event) {
	event.preventDefault();
	event.target.style.transform = 'scale(0.95)';
	event.target.style.webkitTransform = 'scale(0.95)';
})
$("div.button").bind("tap", function(event) {
	event.preventDefault();
	let lv = event.target.id;
	console.log(lv);
	$(event.target).addClass("taphold");
})
$("div.button").bind("touchmove", function(event) {
	console.log(event.clientX);
})
