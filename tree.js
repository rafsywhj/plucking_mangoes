class Tree {
	constructor() {
		this.image = loadImage('Images/tree.png');
	}

	display() {
		push();
		imageMode(CENTER);
		image(this.image, 570, 450, 400, 500);
		pop();
	}
}
