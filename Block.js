class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
     this.Visibility=3
      World.add(world, this.body);
    }
    display(){
      push ()
      //this.image.add(Block)
//console.log(block)
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.body.speed<3){
        rect(pos.x,pos.y,this.width, this.height); 
      }
      else{
        World . remove(world,this.body)
        this.Visibility=this.Visibility-5
        tint (255,this.Visibility)
        image(this.image,pos.x,pos.y,30,40)
      }
     
    
        //World.remove(world,this.body)
       // image (this.image,pos.x,pos.y,this.height,this.width)
      
      pop ()
    }
}