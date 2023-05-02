
let particles = [];
let alpha;
var colors; //color
var colorCol = [] //color collection

function setup() {
    createCanvas(1200,800);
// background color
    background(0);
 
//Initialize particles
  fill(134,190,214)
  
    setParticles();
    
   
  
  

}
function draw() {
    frameRate(90);
//Control the transparency of the background by the abscissa of the mouse
    alpha = map(mouseX, 0, width, 5, 35);
    fill(0, alpha);
    rect(0, 0, width, height);

    // Loop through the displayed particles

    for (let i = 0; i < particles.length; i++) {
       
        particles[i].update();

        particles[i].display();
    }
 
}

function setParticles() {
    // Add 5000 particles to the array
    for (let i = 0; i < 10000; i++) {
    
        let x = random(width);
        let y = random(height);
        let adj = map(y, 0, height, 255, 0);
        
        particles[i] = new Particle(x, y, adj);
    }
}


function mouseClicked() {
    // mouse click to switch particle color
    for (let i = 0; i < 10000; i++) {
       
        particles[i].c = color(random(255), map(particles[i].posY, 0, height, 255, 0), random(255));
    }
}
class Particle {



constructor(xIn, yIn,cIn) {
    this.posX = xIn;
    this.posY = yIn;
    this.c = color(60, cIn, 255);
    this.incr=0
}
// Particle moving speed and mouse ordinate mapping


    update() {
     
        let vg=map(mouseY,0,height,0.008,1)
     this.incr += vg;
     let  theta = noise(this.posX * .006, this.posY * .008, this.incr) * TWO_PI;
     this.posX += 2 * sin(theta);
     this.posY += 2 * sin(theta);
}

 display() {
     if (this.posX > 0 && this.posX < width && this.posY > 0 && this.posY < height) {
       

         fill(this.c)
         ellipse(this.posX, this.posY,3,3)
     }
    
     // out of bounds reset position 

     else {
         
         this.posX = random(width);
         this.posY = random(height);
     }
}

 wrap() {
     if (this.posX < 0) this.posX = width;
     if (this.posX > width) this.posX = 0;
     if (this.posY < 0) this.posY = height;
     if (this.posY > height) this.posY = 0;
}
}


