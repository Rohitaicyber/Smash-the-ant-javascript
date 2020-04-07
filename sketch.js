
var bg,bg_img,sweets,sweets_img,end,end_img,inst,inst_img,blood,blood_img,anti,come_img;

var antl1,antl2,antl3,antl4,antl5,antl_img;

var ant1,ant2,ant3,ant4,antb1,antb2,antb3,antb4,antgroup,ant_img;

var score = 0;
var antbv = "a";
var ant1v = "a";
var ant2v = "a";
var ant3v = "a";
var ant4v = "a";
var life = "a";

var gamestate = "play";
var startstate = "move";

function preload(){
    sweets_img = loadImage("sweets.jpg");
    bg_img = loadImage("bg.jpg");
    ant_img = loadImage("ant.png");
    blood_img = loadImage("blood.png");
    end_img = loadImage("end.png");
    antl_img = loadImage("lifeant.png");
    inst_img = loadImage("inst.gif");
    come_img = loadImage("come.png");
}


function setup() {
  
  createCanvas(350, 625);
  bg = createSprite(175,312,350,615);
  bg.addImage("bg", bg_img);
  bg.scale = 1.5;
  
  sweets = createSprite(175,593,350,50);
  sweets.addImage("sweet", sweets_img);
  sweets.scale = 0.8;

  ant1 = createSprite(600,700);
  ant2 = createSprite(600,700);
  ant3 = createSprite(600,700);
  ant4 = createSprite(600,700);
  antb1 = createSprite(800,800);
  antb2 = createSprite(800,800);
  antb3 = createSprite(800,800);
  antb4 = createSprite(800,800);
  
  antl1 = createSprite(75,15);
  antl1.addImage("ant life", antl_img);
  antl1.scale = 0.05;
  
  antl2 = createSprite(95,15);
  antl2.addImage("ant life", antl_img);
  antl2.scale = 0.05;
  
  antl3 = createSprite(115,15);
  antl3.addImage("ant life", antl_img);
  antl3.scale = 0.05;
  
  antl4 = createSprite(135,15);
  antl4.addImage("ant life", antl_img);
  antl4.scale = 0.05;
  
  antl5 = createSprite(155,15);
  antl5.addImage("ant life", antl_img);
  antl5.scale = 0.05;
  
  blood = createSprite(500,500);
  
  inst = createSprite(175,312);
  inst.addImage("inst", inst_img);
  inst.scale = 0.45;
  
  anti = createSprite(500,312);
  anti.addImage("come", come_img);
  anti.scale = 0.5;
  
  end = createSprite(175,750);
  end.addImage("end", end_img);
}

function draw() {
background("White");
console.log(score);
//  antb4.depth = blood.depth;
  blood.depth = blood.depth+1;
console.log(gamestate);
  
  
drawSprite(bg);
  
  if(life === "f"){
    end.velocityY = -10;
    ant1.velocityY = 0;
    ant2.velocityY = 0;
    ant3.velocityY = 0;
    ant4.velocityY = 0;
    antb1.velocityY = 0;
    antb2.velocityY = 0;
    antb3.velocityY = 0;
    antb4.velocityY = 0;
    sweets.visible = false;
    antb1.x = 500;
    antb2.x = 500;
    antb3.x = 500;
    antb4.x = 500;
    ant1.x = 500;
    ant2.x = 500;
    ant3.x = 500;
    ant4.x = 500;
    antb1.visible = false;
    antb2.visible = false;
    antb3.visible = false;
    antb4.visible = false;
    ant1.visible = false;
    ant2.visible = false;
    ant3.visible = false;
    ant4.visible = false;
    if(end.y === 200){
      end.velocityY = 0;
      fill("black");
      textSize(28);
      text("Tap anywhere to Continue",10,450);
      if(mouseWentDown("leftButton")){
        life = "a";
   sweets.visible = true;
    end.y = 750;
        antb1.visible = true;
    antb2.visible = true;
    antb3.visible = true;
    antb4.visible = true;
    ant1.visible = true;
    ant2.visible = true;
    ant3.visible = true;
    ant4.visible = true;
    score = 0;
  antl1 = createSprite(75,15);
  antl1.addImage("ant life", antl_img);
  antl1.scale = 0.05;
  antl2 = createSprite(95,15);
  antl2.addImage("ant life", antl_img);
  antl2.scale = 0.05;
  antl3 = createSprite(115,15);
  antl3.addImage("ant life", antl_img);
  antl3.scale = 0.05;
  antl4 = createSprite(135,15);
  antl4.addImage("ant life", antl_img);
  antl4.scale = 0.05;
  antl5 = createSprite(155,15);
  antl5.addImage("ant life", antl_img);
  antl5.scale = 0.05;
  antbv = "a";
    gamestate = "play";
    
      }
    }
  }

  
    

if(gamestate === "play"){
    
    

    antf1();
    antf2();
    antf3();
    antf4();
    antb();
    antbif();
 antsweets();
 antif()
    
  
  drawSprite(inst);
  setTimeout(function(){
    inst.visible = false;
    if(startstate === "move"){
      anti.velocityX = -15;
          setTimeout(function(){
    anti.velocityX = 0;
    setTimeout(function(){
      anti.velocityX = -8;
    },400)
  },770)
      startstate = "rest";
      
    }
  
  },3500)

  
  fill("green");
  textFont("Georgia");
  textStyle(BOLD);
  textSize(24);
  text("Score:"+score, 200,22);
  
  fill("red");
  textFont("Georgia");
  textStyle(BOLD);
  textSize(22);
  text("Lifes:", 2,25);
  
  
  drawSprite(antl1);
  drawSprite(antl2);
  drawSprite(antl3);
  drawSprite(antl4);
  drawSprite(antl5);
  drawSprite(antb1);
  drawSprite(antb2);
  drawSprite(antb3);
  drawSprite(antb4);
  drawSprite(sweets);
  drawSprite(ant1);
  drawSprite(ant2);
  drawSprite(ant3);
  drawSprite(ant4);
  drawSprite(blood);
  drawSprite(end);
  drawSprite(anti);
}

}

function antf1(){
if(frameCount % 200 === 0){
var randx = random(20,97);
var randy = random(-25,-125);
var randv = random(5,8);
ant1 = createSprite(randx,randy);
ant1.addImage("ant",ant_img);
ant1.velocityY = 6;
ant1.scale = 0.15;
ant1.lifetime = 280;
ant1v = "a";

}}

function antf2(){
if(frameCount % 200 === 0){
var randx = random(105,175);
var randy = random(-25,-125);
var randv = random(5,8);
ant2 = createSprite(randx,randy);
ant2.addImage("ant",ant_img);
ant2.velocityY = randv;
ant2.scale = 0.15;
ant2.lifetime = 280;
ant2v = "a";

}}

function antf3(){
  if(frameCount % 200 === 0){
var randx = random(180,250);
var randy = random(-25,-250);
var randv = random(5,8);
ant3 = createSprite(randx,randy);
ant3.addImage("ant",ant_img);
ant3.velocityY = randv;
ant3.scale = 0.15;
ant3.lifetime = 280;
ant3v = "a";

}}

function antf4(){
  if(frameCount % 200 === 0){
var randx = random(260,330);
var randy = random(-25,-250);
var randv = random(5,8);
ant4 = createSprite(randx,randy);
ant4.addImage("ant",ant_img);
ant4.velocityY = randv;
ant4.scale = 0.15;
ant4.lifetime = 280;
ant4v = "a";

}}

function antb(){
    if(frameCount % 400 === 0){
var randx = random(135,255);


antbv = "a";

var randy = random(-25,-250);
var randv = random(3,6);
antb1 = createSprite(randx,randy,50,200);

antb1.addImage("ant",ant_img);
antb1.velocityY = randv;
antb1.scale = 0.5;
antb1.lifetime = 500;

}}

function antbif(){
  
      if(mouseIsOver(antb1) && mouseWentDown("leftButton") && antbv === "a"){
    antb2 = createSprite(antb1.x,antb1.y,50,200);
    antb2.addImage("ant",ant_img);
antb2.velocityY = antb1.velocityY;
antb2.scale = 0.5;
antb2.lifetime = 400;
    
    antb1.x = 500;
    antb1.destroy();
    
    
    blood.destroy();
    setTimeout(function(){
      antbv = "b";
      
    },50)
          blood = createSprite(antb1.x,antb1.y);
          blood.addImage("blood", blood_img);
      blood.scale = 0.2;
      
    setTimeout(function(){
    blood.destroy();
    },1000)
    
}
    
    
    
    
      if(mouseIsOver(antb2) && mouseWentDown("leftButton") && antbv === "b"){
         antb3 = createSprite(antb2.x,antb2.y,50,200);
    antb3.addImage("ant",ant_img);
antb3.velocityY = antb1.velocityY;
antb3.scale = 0.5;
antb3.lifetime = 400;
antb2.x = 500;
    antb2.destroy();
    
    blood.destroy();
    
    
    setTimeout(function(){
      antbv = "c";
      
    },50)
      blood = createSprite(antb2.x,antb2.y);
      blood.addImage("blood", blood_img);
      blood.scale = 0.2;
    setTimeout(function(){
    blood.destroy();
    },1000)
    
    }
    
    
    
      if(mouseIsOver(antb3) && mouseWentDown("leftButton") && antbv === "c"){
       antb4 = createSprite(antb3.x,antb3.y,50,200);
    antb4.addImage("ant",ant_img);
antb4.velocityY = antb1.velocityY;
antb4.scale = 0.5;
antb4.lifetime = 400;
    blood.destroy();
      blood = createSprite(antb3.x,antb3.y);
      blood.addImage("blood", blood_img);
      blood.scale = 0.2;
      antb3.x = 500;
      antb3.destroy();
        setTimeout(function(){
      antbv = "d";
     
    },50)
    
    setTimeout(function(){
    blood.destroy();
    },1000)
    
    }}
    
function antsweets(){
    if(ant1.isTouching(sweets) && ant1v === "a"){
    
    ant1v = "b";
    
      if(life === "e"){
      antl1.destroy();
      life = "f";
      }
      
      if(life === "d"){
      antl2.destroy();
      life = "e";
    }
    
      if(life === "c"){
      antl3.destroy();
      life = "d";
    }
    
      if(life === "b"){
      antl4.destroy();
      life = "c";
    }
    
    if(life === "a"){
      antl5.destroy();
      life = "b";
   
    }
    
   }
  
      if(ant2.isTouching(sweets) && ant2v === "a"){
    console.log("hello");
    ant2v = "b";
      if(life === "e"){
      antl1.destroy();
      life = "f";
      }
      
      if(life === "d"){
      antl2.destroy();
      life = "e";
    }
    
      if(life === "c"){
      antl3.destroy();
      life = "d";
    }
    
      if(life === "b"){
      antl4.destroy();
      life = "c";
    }
    
    if(life === "a"){
      antl5.destroy();
      life = "b";
   
    }
  }
  
      if(ant3.isTouching(sweets) && ant3v === "a"){
    console.log("hello");
    ant3v = "b";
      if(life === "e"){
      antl1.destroy();
      life = "f";
      }
      
      if(life === "d"){
      antl2.destroy();
      life = "e";
    }
    
      if(life === "c"){
      antl3.destroy();
      life = "d";
    }
    
      if(life === "b"){
      antl4.destroy();
      life = "c";
    }
    
    if(life === "a"){
      antl5.destroy();
      life = "b";
   
    }
  }
  
      if(ant4.isTouching(sweets) && ant4v === "a"){
    console.log("hello");
    ant4v = "b";
    
      if(life === "e"){
      antl1.destroy();
      life = "f";
      }
      
      if(life === "d"){
      antl2.destroy();
      life = "e";
    }
    
      if(life === "c"){
      antl3.destroy();
      life = "d";
    }
    
      if(life === "b"){
      antl4.destroy();
      life = "c";
    }
    
    if(life === "a"){
      antl5.destroy();
      life = "b";
   
    }
  }
  if(antb1.isTouching(sweets)){
    setTimeout(function(){
      life = "f";

    },750)
          if(life === "a"){
        antl5.destroy();
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "b"){
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "c"){
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "d"){
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "e"){
        antl1.destroy();
      }
  }
    if(antb2.isTouching(sweets)){
    setTimeout(function(){
      life = "f";
    },750)
          if(life === "a"){
        antl5.destroy();
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "b"){
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "c"){
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "d"){
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "e"){
        antl1.destroy();
      }
  }
    if(antb3.isTouching(sweets)){
    setTimeout(function(){
      life = "f";
    },750)
          if(life === "a"){
        antl5.destroy();
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "b"){
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "c"){
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "d"){
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "e"){
        antl1.destroy();
      }
  }
    if(antb4.isTouching(sweets)){
    setTimeout(function(){
      life = "f";
      
    },750)
          if(life === "a"){
        antl5.destroy();
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "b"){
        antl4.destroy();
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "c"){
        antl3.destroy();
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "d"){
        antl2.destroy();
        antl1.destroy();
      }
      if(life === "e"){
        antl1.destroy();
      }
  }


}
function antif(){

    if(mouseIsOver(ant1) && mouseWentDown("leftButton")){
    blood.destroy();
          blood = createSprite(ant1.x,ant1.y);
      blood.addImage("blood", blood_img);
      blood.scale = 0.2;
    setTimeout(function(){
    blood.destroy();
    },1000)
    ant1.x = 500;
        setTimeout(function(){
      ant1.destroy();
     
    },50)

    score = score+1;

    }
    
    
  if(mouseIsOver(ant2) && mouseWentDown("leftButton")){
    blood.destroy();
          blood = createSprite(ant2.x,ant2.y);
      blood.addImage("blood", blood_img);
      blood.scale = 0.2;
    setTimeout(function(){
    blood.destroy();
    },1000)
    ant2.x = 500;
    ant2.y = 500;
    setTimeout(function(){
      
      ant2.destroy();
    },50)
    
   
    score = score+1;
    }
    
    
  if(mouseIsOver(ant3) && mouseWentDown("leftButton")){
    blood.destroy();
          blood = createSprite(ant3.x,ant3.y);
      blood.addImage("blood", blood_img);
      blood.scale = 0.2;
    setTimeout(function(){
    blood.destroy();
    },1000)
    ant3.x = 500;
            setTimeout(function(){
      ant3.destroy();
     
    },50)
    
    score = score+1;
    }
    
    
  if(mouseIsOver(ant4) && mouseWentDown("leftButton")){
    blood.destroy();
          blood = createSprite(ant4.x,ant4.y);
      blood.addImage("blood", blood_img);
      blood.scale = 0.2;
    setTimeout(function(){
    blood.destroy();
    },1000)
    
    ant4.x = 500;
            setTimeout(function(){
      ant4.destroy();
     
    },50)
  
    score = score+1;
    }

    
      if(mouseIsOver(antb4) && mouseWentDown("leftButton") && antbv === "d"){
      
     blood.destroy();
    score = score+4;
    blood = createSprite(antb4.x,antb4.y);
    blood.addImage("blood", blood_img);
    blood.scale = 0.2;
      antb4.x = 500;
      antb1.destroy();
      antb2.destroy();
      antb3.destroy();
    antb4.destroy();
    setTimeout(function(){
    blood.destroy();
    },1000)
    antbv = "a";
    }}