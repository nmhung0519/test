var container = document.getElementById('menu')
var buttons = document.getElementsByClassName('button');
$("div.button").bind("mousedown", function(event) {
	console.log(event.target);
	event.preventDefault();
})
$("div.button").bind("mouseup", function(event) {
	event.preventDefault();
	let lv = event.target.id;
	select(lv);
	console.log($(this).parent());
})
function select(lv) {
	var mainPack = document.createElement("div");
	var _container = document.createElement("div");
	_container.className = 'container';
	var _header = document.createElement("div");
	_header.style.background = 'blue';
	_header.className = 'header';
	mainPack.appendChild(_container);
	mainPack.appendChild(_header);
	buttons[0].style.animationName = 'hide';
	console.log(document.getElementById('menu'));
}