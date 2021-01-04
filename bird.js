class BIRD{
    constructor(x,y){
        var option = {
            restitution:0.5
        }
        this.body = Bodies.rectangle(x,y,70,70,option);
        this.width = 70;
        this.height = 70;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        pos.x = mouseX;
        pos.y = mouseY;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        stroke("black");
        strokeWeight(2);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }}