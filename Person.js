let numBalls = 300;
let spring = 0.01;
let gravity = 0.03;
let balls = [];
let speed = 1; 
let radius = 10;
const COLORS = ['#c8c8c8', '#f65c78', '#8cba51', '#79bac1']; // White, Red, Green, Blue
let infectionRate = 95;

class Ball {
  constructor(xin, yin, din, idin, oin, status) {
    this.x = xin;
    this.y = yin;
    this.vx = random(-1,1) * speed;
    this.vy = random(-1,1) * speed;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
    this.status = status;
  }

  collide() {
    for (let i = 0; i < numBalls; i++) {
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      if (distance < minDist) {
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;

        this.isInfected(i);
      }
    }
  }
  // work on infection logic next.
  isInfected(otherIndex) {
    // infection rate. 
    if (this.others[otherIndex].status == 1) {
      let rand = Math.floor(Math.random() * 100);
      if (rand > infectionRate) {
        this.status = 1;
      } 
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= -1;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= -1;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= -1;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= -1;
    }
  }

  display() {
    fill(COLORS[this.status]);
    circle(this.x, this.y, this.diameter);
  }

  
}
