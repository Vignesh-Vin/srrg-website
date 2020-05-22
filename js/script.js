console.log("Im here");

$(document).ready(function(){

	//jQuery goes here....
	$('header').slideDown(500, function(){ });
	$('.buttons').fadeTo(1600, 1, function(){ });
	$('.heading').fadeTo(500, 1, function(){ });

	$('')
});

let canvas = document.querySelector(".bg");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
// ctx.fillStyle = "#69fae8";

let xpos = 100;
let ypos = 100;
let dx = 8;
let dy = 2;
// Request Animation Frame

function animate() {
	requestAnimationFrame(animate);
	console.log("HAI");
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	ctx.beginPath();
	ctx.arc(xpos, ypos, 50, 0, Math.PI * 2, false);
	ctx.strokeStyle = "#69fae8";
	ctx.closePath();
	ctx.stroke();
	xpos += dx;
	ypos += dy;
	if (xpos + 50 > innerWidth || xpos - 50 < 0) { dx = -dx; }
	if (ypos + 50 > innerHeight || ypos < 0) { dy = -dy; }
	

}

animate();