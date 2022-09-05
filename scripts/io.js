let infectionRate; 
let numBalls;
let speed;
let percentVacc; 
function controls() {
    let divlabel = document.getElementById("labels");

    // create divs.
    const IRDiv = document.createElement("div");
    const NBDiv = document.createElement("div");
    const sDiv = document.createElement("div");
    const PVDiv = document.createElement("div");

    //create text labels.
    var textIR = document.createTextNode("Infection Rate: ");
    var textNB = document.createTextNode("Population: ");
    var textS = document.createTextNode("Speed of Simulation: ");
    var textPV = document.createTextNode("Percent Vaccinated: ");

    // append the text to the divs.
    IRDiv.appendChild(textIR);
    NBDiv.appendChild(textNB);
    sDiv.appendChild(textS);
    PVDiv.appendChild(textPV);

    // create sliders.
    infectionRate = createSlider(10, 100, 50, 5);
    infectionRate.parent(IRDiv);
    numBalls = createSlider(100, 500, 300, 50);
    numBalls.parent(NBDiv);
    speed = createSlider(0, 5, 2, 1);
    speed.parent(sDiv);
    percentVacc = createSlider(0, 100, 60, 5);
    percentVacc.parent(PVDiv);

    // add parents to label.
    divlabel.appendChild(IRDiv);
    divlabel.appendChild(NBDiv);
    divlabel.appendChild(sDiv);
    divlabel.appendChild(PVDiv);
    
    // input changes.
    speed.input(() => {
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




