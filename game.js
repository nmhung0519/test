var container = document.getElementById("container");
window.addEventListener("resize", fixPosition);
function fixPosition() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	if (width > 900) container.style.left = (width - 900)/2 + 'px';
	else container.style.left = '0px';
	if (height > 1600) container.style.top = (height - 1600)/3 + 'px';
	else container.style.top = '0px';
}
