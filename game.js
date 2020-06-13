var container = document.getElementsByClassName('container');
var header = document.getElementsByClassName('header');
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
	_header.style.animationName = 'enter';
	_header.style.animationDuration = '1s';
	_container.style.animationName = 'enter';
	_container.style.animationDuration = '1s';
	mainPack.appendChild(_container);
	mainPack.appendChild(_header);
	display.appendChild(mainPack);
	container[0].style.animationName = 'hide';
	header[0].style.animationName = 'hide';
	console.log(document.getElementById('menu'));
}