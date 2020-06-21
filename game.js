var buttons = document.getElementsByClassName('button');
var menu = document.getElementById('menu');
var pre = 0;
var canClick = 1;
var a = new Audio('E:/Music/Simple love - obito (W-n Remix) , Cover Duongg , Tien.mp3');
$("div.button").bind("mousedown", function(event) {
	console.log(event.target);
	event.preventDefault();
})
$("div.back").bind("mouseup", function(event) {
	event.preventDefault();

})
addEventListener("mouseup", function(event) {
	if (canClick == 1) {
		var target = event.target;
		console.log(event.target);
		if (target.className == 'button') {
			a.play();
			let lv = target.id;
			canClick = 0;
			select(lv);
		}
		else if (target.className == 'back') {
			canClick = 0;
			_back(pre);
		}
	}
})
function select(lv) {
	var container_pre = document.getElementsByClassName("container")[0];
	var header_pre = document.getElementsByClassName("header")[0];
	menu.appendChild(container[lv]);
	container[lv].style.animationName = 'enter';
	header[lv].style.animationName = 'enter';
	menu.appendChild(header[lv]);
	container_pre.style.animationName = 'hide';
	header_pre.style.animationName = 'hide';
	setTimeout(function() {
		container_pre.style.display = 'none';
		header_pre.style.display = 'none';
		canClick = 1;
		console.log(canClick);
	}, 1000);
}
function _back() {
	console.log("back");
	var container_pre = document.getElementsByClassName("container")[1];
	var header_pre = document.getElementsByClassName("header")[1];
	container_pre.style.animationName = 'back';
	header_pre.style.animationName = 'back';
	container[0].style.display = 'block';
	header[0].style.display = 'block';
	//menu.appendChild(container[0]);
	//menu.appendChild(header[0]);
	container[0].style.animationName = 'unhide';
	header[0].style.animationName = 'unhide';
	setTimeout(function() {
		menu.removeChild(container_pre);
		menu.removeChild(header_pre);
		canClick = 1;
		console.log(canClick);
	}, 1000);
}
function start() {
	menu.appendChild(container[0]);
	menu.appendChild(header[0]);
	console.log("check");
}