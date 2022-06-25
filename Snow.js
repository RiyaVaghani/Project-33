
class Snow {
  constructor(x, y) {
      var options = {
          restitution: 0,
          friction: 0,
          density: 10
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("snow4.webp");
      World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    scale(0.1,0.1)
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

};