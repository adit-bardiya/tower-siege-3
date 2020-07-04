var a = 0;
class Box{
  constructor(x, y, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 50, options);
      this.width = 30;
      this.height = 50;
      
      this.visiblity = 255;
      World.add(world, this.body);
      
    }
    display(){
      if(this.body.speed<3){
          if(this.visiblity>0){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
          
            rect( 0, 0, this.width, this.height); 
            pop();
          }
      }
      else{
        if(this.visiblity>0){
          console.log("hello");
          push();
          this.visiblity -= 5;
          tint(255,this.visiblity);
          rect(this.body.position.x,this.body.position.y, 30, 50);
          pop();
        }
        if(this.visiblity===0){
          World.remove(world, this.body);
        }
      }
      console.log(this.visiblity);
    }
}