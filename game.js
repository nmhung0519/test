var container = document.getElementById("container");
var buttons = document.getElementsByClassName('button');
$(document).taphold(function(event) {
	
});
$("div.button").bind("touchstart", function(event) {
	console.log(event.target);
	event.preventDefault();
	event.target.style.transform = 'scale(0.95)';
	event.target.style.webkitTransform = 'scale(0.95)';
})
$("div.button").bind("touchend", function(event) {
	event.preventDefault();
	let lv = event.target.id;
	console.log(lv);
	event.target.style.transform = 'scale(0.95)';
	event.target.style.webkitTransform = 'scale(0.95)';
	event.target.style.background = 'blue';
	select(lv);
})
function select(lv) {

}
document.addEventListener("touchmove", function(event) {
	console.log(event.changedTouches[0].clientX);
	if(event.target.className == 'button') event.target.style.transform = 'scale(1)';
})

