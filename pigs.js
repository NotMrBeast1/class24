class PIGS{
    constructor(x,y){
        var option = {
            restitution:0.5
        }
        this.body = Bodies.rectangle(x,y,60,60,option);
        this.width = 60;
        this.height = 60;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}