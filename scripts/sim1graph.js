var sim1graph = function(p) {
    const FRAME_RATE = 10;
    
    p.setup = function() {
        p.createCanvas(1100, 500);
        p.background(255);
        p.frameRate(FRAME_RATE);
    };

    p.draw = function() {
        lineDrawer.draw();
    }

    function createLineDrawer(numberOfBalls) {
        
        // skeches a bunch of dots.
        // essentially create a class. 
        // its y value will be its respective value and its x intercept
        // will be its current frame. 
        // stop plotting when it has reached the edge (1100 px)
        
        let susceptible = 

    }

}