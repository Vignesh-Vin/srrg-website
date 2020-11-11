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

// Event Listeners
addEventListener('resize', () => {
	canvas.width = innerWidth
	canvas.height = innerHeight
	rounds = [];
	init()
})

let dx = 5;
let dy = 2;
let radius = 70;
let color = "#29B3A215";
//let colorSlider = 1;

// Circle Object
function Round(xpos, ypos, dx, dy, color) {
	this.xpos = xpos;
	this.ypos = ypos;
	this.dx = dx;
	this.dy = dy;
	this.color = color;
	//this.colorSlider = colorSlider;
}

Round.prototype.draw = function() {
	ctx.beginPath();
	ctx.arc(this.xpos, this.ypos, radius, 0, Math.PI * 2, false);
	//ctx.strokeStyle = "#29B3A2";
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
	//ctx.stroke();
}

Round.prototype.update = function() {
	this.xpos += this.dx;
	this.ypos += this.dy;
	// this.colorSlider += 1;
	// if (this.colorSlider == 99 || this.colorSlider == 0) {
	// 	this.colorSlider = -this.colorSlider;
	// }
	// this.color = this.color.substring(0, this.color.length - 2)
	// this.color += colorSlider.toString();
	//console.log(this.color);
	if (this.xpos + radius > innerWidth || this.xpos - radius < 0) { this.dx = -this.dx; }
	if (this.ypos + radius > innerHeight || this.ypos < 0) { this.dy = -this.dy; }
	//console.log(xpos, ypos);
	this.draw();
}

// Objects initiation
let rounds = [];
function init() {
console.log("Started init");
for(i = 0; i < 15; i++) {
	xpos = randomIntFromRange(radius, window.innerWidth - radius);
	ypos = randomIntFromRange(radius, window.innerHeight - radius);
	dx = randomIntFromRange(1, 3);
	dy = randomIntFromRange(1, 3);
	//color = randomIntFromRange(1, 99);
	//colorSlider = randomIntFromRange(10, 99);
	console.log(xpos, ypos, dx, dy, color);
	//around = new Round(xpos, ypos);
	//console.log(around);
	rounds.push(new Round(xpos, ypos, dx, dy, color));
	}
}

// Request Animation Frame


function animate() {
	requestAnimationFrame(animate);
	console.log("HAI");
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for (i = 0; i < rounds.length; i++) {
		rounds[i].update();
	}
}


// Useful Functions

function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
  }

init();
console.log(rounds);
animate();