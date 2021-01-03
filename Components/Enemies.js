function Enemies(x, y){
     this.pos = createVector(x, y); 
     this.r = 10; 

     this.update = function(){
          this.render(); 
          this.move(); 
     }

     this.render = function(){
          fill('red'); 
          ellipse(this.pos.x, this.pos.y, this.r, this.r); 
     }

     this.move = function(){
          
     }
}