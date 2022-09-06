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
    const rDiv = document.createElement("div");

    //create text labels.
    var textIR = document.createTextNode("Infection Rate: ");
    var textNB = document.createTextNode("Population: ");
    var textS = document.createTextNode("Speed of Simulation: ");
    var textPV = document.createTextNode("Percent Vaccinated: ");
    var textR = document.createTextNode("Recovery Time: ");


    // create sliders.
    infectionRate = createSlider(10, 100, 50, 5);
    numBalls = createSlider(100, 500, 400, 50);
    speed = createSlider(0, 5, 3, 1);
    percentVacc = createSlider(0, 100, 60, 5);
    recoveryTime = createSlider(0, 60 * 5, 3 * 60, 60);

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

    rDiv.appendChild(textR);
    divlabel.appendChild(rDiv);
    recoveryTime.parent(divlabel);

    

    //creation of button/ implementing use. 
    const resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener("click", Reset);

    function Reset() {
        balls = [];
        importPeople();
    }

    
    
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




