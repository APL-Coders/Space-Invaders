function Bullets(x, y){
     this.pos = createVector(x, y); 
     this.w = 5; 
     this.h = 10; 
     this.vel = 20; 

     this.update = function(){
          this.render(); 
          this.move(); 
     }

     this.render = function(){
          fill('orange'); 
          rectMode(CENTER); 
          rect(this.pos.x, this.pos.y, this.w, this.h); 
     }

     this.move = function(){
          this.pos.y -= this.vel; 
     }
}