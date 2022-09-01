let infectionRate; 
let numBalls;
let speed;
function controls() {
    IRlabel = createDiv('Infection Rate');
    NBlabel = createDiv('Population');
    slabel = createDiv('Speed');
    infectionRate = createSlider(10, 100, 50, 5);
    infectionRate.parent(IRlabel);
    numBalls = createSlider(100, 1000, 400, 50);
    numBalls.parent(NBlabel);
    speed = createSlider(0, 5, 2, 1);
    speed.parent(slabel);
    speed.input(() => {
        //as the value of speed changes.
        balls = [];
        importPeople();
    });

    infectionRate.input(() => {
        balls = [];
        importPeople();
    });

    numBalls.input(() => {
        balls = [];
        importPeople();
    });
}


