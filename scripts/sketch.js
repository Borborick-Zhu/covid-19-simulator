const FRAME_RATE = 60;


var sim1 = function(p) {
    //variables used for Person class.
    let spring = 0.001;
    let balls = [];
    let radius = 10;
    let infectionTime = 14; 
    const COLORS = ['#c8c8c8', '#f65c78', '#8cba51', '#79bac1']; // White, Red, Green, Blue
    
    // parameter varibles.
    let infectionRate; 
    let numBalls;
    let speed;
    let percentVacc; 

    
    p.setup = function() {
        p.createCanvas(720, 400);
        p.frameRate(FRAME_RATE);
        this.controls();
        this.importPeople();
        
    }

    p.draw = function() {
        p.background('#303030');
        this.move();
    }

    p.move = function() {
        for (let i = 0; i < this.numBalls.value(); i++) {
            let ball = balls[i];
            p.noStroke()
            ball.collide();
            ball.move();
            ball.display();
        }
    }

    p.importPeople = function() {
        for (let i = 0; i < this.numBalls.value(); i++) {
            balls[i] = new Ball(
                p.random(p.width),
                p.random(p.height),
                radius,
                i,
                balls,
                0
            );
        }
        console.log(balls);
        let percentVal = this.percentVacc.value()/ 100;
        for (let j = 0; j < percentVal * this.numBalls.value(); j++) {
            balls[j].status = 3;
        }
        balls[this.numBalls.value() - 1].status = 1;
    }



    //implementation for person class.
    class Ball {
        
        constructor(xin, yin, din, idin, oin, status) {
            this.x = xin;
            this.y = yin;
            this.vx = p.random(-1,1) * p.speed.value();
            this.vy = p.random(-1,1) * p.speed.value();
            this.diameter = din;
            this.id = idin;
            this.others = oin;
            this.status = status;
            this.vaccinated = false; 
            this.daysInfected = 0;
            if (this.status == 1) {
            this.daysInfected = 1;
            }
            if (this.status == 3) {
            this.vaccinated = true;
            }
        }

        collide() {
            for (let i = 0; i < p.numBalls.value(); i++) {
                let dx = this.others[i].x - this.x;
                let dy = this.others[i].y - this.y;
                let distance = p.sqrt(dx * dx + dy * dy);
                let minDist = this.others[i].diameter / 2 + this.diameter / 2;
                if (distance < minDist) {
                    let angle = p.atan2(dy, dx);
                    let targetX = this.x + p.cos(angle) * minDist;
                    let targetY = this.y + p.sin(angle) * minDist;
                    let ax = (targetX - this.others[i].x) * spring;
                    let ay = (targetY - this.others[i].y) * spring;
                    this.vx -= ax;
                    this.vy -= ay;
                    this.others[i].vx += ax;
                    this.others[i].vy += ay;

                    //this.isInfected();
                }
            }
        }
        
        // isInfected(otherIndex) {
        //     // infection rate. 
        //     let rand = Math.floor(Math.random() * 100);
        //         if (this.status == 1) {
        //         // meaning itself is infected. 
        //         if (this.others[otherIndex].status == 0) {
        //             if (rand <= p.infectionRate.value()) {
        //             this.others[otherIndex].status = 1;
        //             this.others[otherIndex].daysInfected = 1; 
        //             }
        //         } else if (this.others[otherIndex].status == 3) {
        //             //chance of infection after 3 doses. Less than 3 percent. 
        //             if (rand < 3) {
        //             this.others[otherIndex].status = 1; 
        //             this.others[otherIndex].daysInfected = 1; 
        //             }
        //         } 
        //     }  
        // }

        checkInfection() {
            if (this.status == 1) {
                if (this.daysInfected < p.recoveryTime.value()) {
                    // 4 days per second.
                    this.daysInfected += 1;
                } else {
                    this.status = 2;
                    this.daysInfected = 0;     
                }
            }
        }

        move() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x + this.diameter / 2 > p.width) {
                this.x = p.width - this.diameter / 2;
                this.vx *= -1;
            } else if (this.x - this.diameter / 2 < 0) {
                this.x = this.diameter / 2;
                this.vx *= -1;
            }
            if (this.y + this.diameter / 2 > p.height) {
                this.y = p.height - this.diameter / 2;
                this.vy *= -1;
            } else if (this.y - this.diameter / 2 < 0) {
                this.y = this.diameter / 2;
                this.vy *= -1;
            }

            this.checkInfection();
        }

        display() {
            p.fill(COLORS[this.status]);
            p.circle(this.x, this.y, this.diameter);
        }
    }

    // control implementations
    p.controls = function() {
        let divlabel = document.getElementById("labels");

        // create divs.
        const IRDiv = document.createElement("div");
        const NBDiv = document.createElement("div");
        const sDiv = document.createElement("div");
        const PVDiv = document.createElement("div");
        const rDiv = document.createElement("div");

        //create text labels.
        var textIR = document.createTextNode("Infection Rate: ");
        var textNB = document.createTextNode("Population: ");
        var textS = document.createTextNode("Speed of Simulation: ");
        var textPV = document.createTextNode("Percent Vaccinated: ");
        var textR = document.createTextNode("Recovery Time: ");


        // create sliders.
        this.infectionRate = p.createSlider(10, 100, 50, 5);
        this.numBalls = p.createSlider(100, 500, 400, 50);
        this.speed = p.createSlider(0, 5, 3, 1);
        this.percentVacc = p.createSlider(0, 100, 60, 5);
        this.recoveryTime = p.createSlider(0, 60 * 5, 3 * 60, 60);

        // add parents to label.
        IRDiv.appendChild(textIR);
        divlabel.appendChild(IRDiv);
        this.infectionRate.parent(divlabel);

        NBDiv.appendChild(textNB);
        divlabel.appendChild(NBDiv);
        this.numBalls.parent(divlabel);

        sDiv.appendChild(textS);
        divlabel.appendChild(sDiv);
        this.speed.parent(divlabel);

        PVDiv.appendChild(textPV);
        divlabel.appendChild(PVDiv);
        this.percentVacc.parent(divlabel);

        rDiv.appendChild(textR);
        divlabel.appendChild(rDiv);
        this.recoveryTime.parent(divlabel);

        

        //creation of button/ implementing use. 
        const resetButton = document.querySelector(".reset-button");
        resetButton.addEventListener("click", Reset);

        function Reset() {
            balls = [];
            p.importPeople();
        }
        
        // input changes.
        this.speed.input(() => {
            balls = [];
            p.importPeople();
        });

        this.infectionRate.input(() => {
            balls = [];
            p.importPeople();
        });

        this.numBalls.input(() => {
            balls = [];
            p.importPeople();
        });
        this.percentVacc.input(() => {
            balls = [];
            p.importPeople();
        });
    }
};

