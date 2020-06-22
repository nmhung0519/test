var buttons = document.getElementsByClassName('button');
var menu = document.getElementById('menu');
var pre = 0;
var canClick = 1;
var a = new Audio('E:/Music/Simple love - obito (W-n Remix) , Cover Duongg , Tien.mp3');
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
		if (target.className == 'picture') {
			canClick = 0;
			play(target);
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
	setTimeout(function () {
		container_pre.style.display = 'none';
		header_pre.style.display = 'none';
		canClick = 1;
	}, 1000);
}
function _back() {
	var container_pre = document.getElementsByClassName("container");
	var header_pre = document.getElementsByClassName("header");
	var n = container_pre.length;
	container_pre[n-1].style.animationName = 'back';
	header_pre[n-1].style.animationName = 'back';
	container[n-2].style.display = 'block';
	header[n-2].style.display = 'block';
	//menu.appendChild(container[0]);
	//menu.appendChild(header[0]);
	container_pre[n-2].style.animationName = 'unhide';
	header[n-2].style.animationName = 'unhide';
	setTimeout(function() {
		menu.removeChild(container_pre[n-1]);
		menu.removeChild(header_pre[n-1]);
		canClick = 1;
	}, 1000);
}
function start() {
	menu.appendChild(container[0]);
	menu.appendChild(header[0]);
	console.log("check");
}
function play(target) {
	var container_pre = document.getElementsByClassName("container")[1];
	var header_pre = document.getElementsByClassName("header")[1];
	console.log(container_pre);
	container_pre.style.animationName = 'hide';
	header_pre.style.animationName = 'hide';
	menu.appendChild(play_container);
	menu.appendChild(play_header);
	play_container.style.animationName = 'enter';
	play_header.style.animationName = 'enter';
	setTimeout(function () {
		container_pre.style.display = 'none';
		header_pre.style.display = 'none';
		canClick = 1;
	}, 1000);
}