class Ground {

    constructor(x, y, width, height) {
     
        this.x= x;
        this.y= y;
        this.width = width;
        this.height = height;
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height);

      World.add(world, this.body);
    }
    display(){
      //rectMode(CENTER);
      
     rect(this.x,this.y,this.width,this.height);
    }
  };
  