const FRAME_RATE = 120;

function setup() {
    createCanvas(720, 400);
    background(0);
    frameRate(FRAME_RATE);
    controls();
    importPeople();
}
  

function draw() {
    background(0);
    move();
}

function move() {
    for (let i = 0; i < numBalls.value(); i++) {
        let ball = balls[i];
        noStroke()
        ball.collide();
        ball.move();
        ball.display();
    }
}

function importPeople() {

    for (let i = 0; i < numBalls.value(); i++) {
        balls[i] = new Ball(
        random(width),
        random(height),
        radius,
        i,
        balls,
        0
        ); 
    }
    let percentVal = percentVacc.value()/ 100;
    for (let j = 0; j < percentVal * numBalls.value(); j++) {
        balls[j].status = 3;
    }
    balls[numBalls.value() - 1].status = 1;
    
}
