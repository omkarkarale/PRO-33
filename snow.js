class Snow {
    constructor(){
        var options = {
            density : 0.1,
            friction : 0.1,
            isStaic : false,
            frictionAir : 0.7
        };
        this.body = Bodies.circle(random(20,width-20), 5, 50, options);
        this.r = 50;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}