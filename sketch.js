
function setup() {
    createCanvas(720, 400);
    let infected = Math.floor(Math.random() * numBalls);


    for (let i = 0; i < numBalls; i++) {
        if (i == infected) {
            balls[i] = new Ball(
                random(width),
                random(height),
                radius,
                i,
                balls,
                1
            )
        } else {
            balls[i] = new Ball(
            random(width),
            random(height),
            radius,
            i,
            balls,
            0
            );
        }
        
    }
    
}
  

function draw() {
    background(0);
    for (let i = 0; i < numBalls; i++) {
        let ball = balls[i];
        noStroke()
        ball.collide();
        ball.move();
        ball.display();
    }
}