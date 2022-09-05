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


    // create sliders.
    infectionRate = createSlider(10, 100, 50, 5);
    numBalls = createSlider(100, 500, 300, 50);
    speed = createSlider(0, 5, 2, 1);
    percentVacc = createSlider(0, 100, 60, 5);

    // add parents to label.
    IRDiv.appendChild(textIR);
    divlabel.appendChild(IRDiv);
    infectionRate.parent(divlabel);

    NBDiv.appendChild(textNB);
    divlabel.appendChild(NBDiv);
    numBalls.parent(divlabel);

    sDiv.appendChild(textS);
    divlabel.appendChild(sDiv);
    speed.parent(divlabel);

    PVDiv.appendChild(textPV);
    divlabel.appendChild(PVDiv);
    percentVacc.parent(divlabel);

    
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




