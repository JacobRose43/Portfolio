let ic = document.querySelector(".inner-cursor");
let oc = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
	let x = e.clientX;
	let y = e.clientY;

	ic.style.left = `${x}px`;
	ic.style.top = `${y}px`;
	oc.style.left = `${x}px`;
	oc.style.top = `${y}px`;
}
