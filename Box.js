class Box {
    constructor(x, y, width, height){
     var options = {
      density: 1,
      friction: 0.004,
      restitution: 0.8, 
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(0)
        strokeWeight(3)
        fill("blue")
        rect(0, 0, this.width, this.height)
        pop();
    }
}