
class Weight{
  constructor(x, y, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':10.0
      }
      this.image = loadImage("sprites/bird.png")
      this.body = Bodies.rectangle(50,200,20,20,options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,40,40);
      pop();
    }
}