let grotesk;
let outlines = [];
let x, y, w;

function preload() {
  grotesk = loadFont("https://files.cargocollective.com/c1513763/grotesk.otf");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(grotesk);
  // text("up",width/2,height/2);
  x = width / 2 -275;
  y = height/2+40;
  let upArray = grotesk.textToPoints('scan', x, y,200);
  print(upArray);

  for (let i = 0; i < upArray.length; i++) {

    // line(upArray[i].x, upArray[i].y, 100, 1000);
    let _upArray = upArray[i];
    outlines[i] = new Outline(_upArray.x, _upArray.y);

  }

}

function draw() {
  background(0);
  for (let i = 0; i < outlines.length; i++) {
    outlines[i].show();
  }

}

class Outline {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 55;
    this.corner = 20;

  }

  show() {
     w = 1;
    push();
    translate(this.x, this.y);
    this.y -= 0.88;
    // textSize(200);
    
     if(this.y<10){
       
       this.y = -this.y;
         this.y = this.y+100;
       fill(255,0,0);
    w= mouseX/8;
        
     }
    stroke(255);
   
    strokeWeight(w);
    // scale(100,200);
    line(100, 100, 100, 10);
      point(100, 140, 100);
    pop();


  }


}