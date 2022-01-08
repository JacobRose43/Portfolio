let ic = document.querySelector(".inner-cursor");
let oc = document.querySelector(".outer-cursor");
let rc = document.querySelector(".right-container");
let rctxt = document.querySelector("body > section.main-section > div.right-container > p");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
	let x = e.clientX;
	let y = e.clientY;

	ic.style.left = `${x}px`;
	ic.style.top = `${y}px`;
	oc.style.left = `${x}px`;
	oc.style.top = `${y}px`;
}

rc.addEventListener("mouseover", function () {
	oc.style.backgroundColor = "white";
	oc.style.display = "none";
	ic.style.width = "60px";
	ic.style.height = "60px";
	rc.style.backgroundColor = "white";
	rctxt.style.color = "black";
});

rc.addEventListener("mouseleave", function () {
	oc.style.backgroundColor = "transparent";
	oc.style.display = "";
	ic.style.width = "10px";
	ic.style.height = "10px";
	rc.style.backgroundColor = "black";
	rctxt.style.color = "white";
});
