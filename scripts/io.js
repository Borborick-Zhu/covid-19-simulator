let infectionRate; 
let numBalls;
let speed;
let percentVacc; 
function controls() {
    IRlabel = createDiv('Infection Rate');
    NBlabel = createDiv('Population');
    slabel = createDiv('Speed');
    pVlabel = createDiv('Percent Vaccinated');
    infectionRate = createSlider(10, 100, 50, 5);
    infectionRate.parent(IRlabel);
    numBalls = createSlider(100, 1000, 400, 50);
    numBalls.parent(NBlabel);
    speed = createSlider(0, 5, 2, 1);
    speed.parent(slabel);
    percentVacc = createSlider(0, 100, 60, 5);
    percentVacc.parent(pVlabel);
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
    percentVacc.input(() => {
        balls = [];
        importPeople();
    });
}


