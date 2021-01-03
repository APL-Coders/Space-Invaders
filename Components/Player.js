function Player(){
     this.pos = createVector(width/2, height - 10); 
     this.w = 100; 
     this.h = 20; 
     this.movingRight = false; 
     this.movingLeft = false; 
     this.vel = 10; 

     this.update = function(){
          this.render(); 
          this.move(); 
          this.checkEdges(); 
     }

     this.render = function(){
          fill('blue'); 
          rectMode(CENTER); 
          rect(this.pos.x, this.pos.y, this.w, this.h); 
     }
     
     this.move = function(){
          if(this.movingRight === true){
               this.pos.x += this.vel; 
          }else if(this.movingLeft === true){
               this.pos.x -= this.vel; 
          }
     }

     this.checkEdges = function(){
          if(this.pos.x + this.w/2 >= width){
               this.pos.x = width - this.w/2; 
          }else if(this.pos.x - this.w/2 <= 0){
               this.pos.x = this.w/2; 
          }
     }
}