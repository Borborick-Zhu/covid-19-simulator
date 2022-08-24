let spring = 0.001;
let balls = [];
let radius = 10;
const COLORS = ['#c8c8c8', '#f65c78', '#8cba51', '#79bac1']; // White, Red, Green, Blue
let infectionTime = 14; 

class Ball {
  constructor(xin, yin, din, idin, oin, status) {
    this.x = xin;
    this.y = yin;
    this.vx = random(-1,1) * speed.value();
    this.vy = random(-1,1) * speed.value();
    this.diameter = din;
    this.id = idin;
    this.others = oin;
    this.status = status;
    this.daysInfected = 0;
    if (this.status == 1) {
      this.daysInfected = 1;
    }
  }

  collide() {
    for (let i = 0; i < numBalls.value(); i++) {
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
      if (rand > infectionRate.value()) {
        this.status = 1;
      } 
    } else if (this.others[otherIndex].status == 2) {
      let rand = Math.random() * 100;
      if (rand > 99.9999) {
        this.status = 1;
      }
    }
  }

  checkInfection() {
    if (this.status == 1) {
      if (this.daysInfected < infectionTime) {
        this.daysInfected += 0.25;
      } else {
        this.status = 2;
        this.daysInfected = 0;
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

    this.checkInfection();
  }

  display() {
    fill(COLORS[this.status]);
    circle(this.x, this.y, this.diameter);
  }

  
}
