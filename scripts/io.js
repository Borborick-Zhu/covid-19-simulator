let infectionRate; 
let numBalls;
let speed;
function controls() {
    infectionRate = createSlider(10, 100, 50, 5);
    numBalls = createSlider(100, 1000, 400, 50);
    speed = createSlider(0, 5, 2, 1);
}