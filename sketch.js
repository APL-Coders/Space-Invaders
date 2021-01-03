let player, bullets = [], enemies = [];
const enemyLimit = 20; 

function setup(){
     createCanvas(600, 600); 
     player = new Player(); 
     for(let i = 0; i < enemyLimit; i++){
          enemies.push(new Enemies(random(player.w/2, width - player.w/2), random(height/2))); 
     }
}

function draw(){
     background(0);
     for(let i = 0; i < bullets.length; i++){
          bullets[i].update(); 
     }
     player.update(); 
     for(let i = 0; i < enemyLimit; i++){
          enemies[i].update(); 
     }
}

function keyPressed(){
     if(key === 'a' || key === 'A'){
          player.movingLeft = true;
     }else if(key === 'd' || key === 'D'){
          player.movingRight = true; 
     }
}

function keyReleased(){
     player.movingLeft = false; 
     player.movingRight = false; 
}

function mousePressed(){
     bullets.push(new Bullets(player.pos.x, player.pos.y));  
}