//2020-07-30_数学デッサン教室p30トーラスtorus
//x =(R+r*cos(u))*cos(v)
//y=(R+r*cos(u))*sin(v)
//z= r*sin(u)
let x;
let y;
let z;
let R;
let r;

function setup() {
	createCanvas(600, 600, WEBGL);
}

function draw() {
	background("#f4f1de"); //いいクリーム色
	stroke("#355070"); //いい紺色
	translate(0, 0, -500);
	rotateX(frameCount/100);
	rotateY(frameCount/100);
	R = 200;
	r = 250;
	for (let u = 0; u < TWO_PI; u+=0.5) {
		for (let v = 0; v <TWO_PI; v+=0.5) {
			x = (R + r * cos(u)) * cos(v);
			y = (R + r * cos(u)) * sin(v);
			z = r * sin(u)
			push();
			translate(x, y, z);
			sphere(2);
			pop();
		}
	}
	//noLoop();

}