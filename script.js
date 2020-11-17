
let forms = [];
let palettes = [
    {
    "primary": "green",
    "secondary": "yellow",
    "tertiary": "orange",
    },
    {
        "primary": "dodgerblue",
        "secondary": "chartreuse",
        "tertiary": "lightskyblue",
    }
];

let colors;
let capture;

function setup() {
    createCanvas(480,480);
    background("white");
    
    // capture = createCapture(VIDEO);
    // capture.size(480, 480);
    // capture.hide();

    let n = int(random(3,10));
    for (let j = 0; j < n; j++) {
        while(true) {
            let r = int(random(0,16));
            if(forms.includes(r)) {
                continue;
            }
            else {
                forms.push(r);
                break;
            }
        }
    }

    colors = random(palettes);
    
}

function prepareGrid() {

    let x = width;
    let y = height;
    let u = width/4;

    let row = 0;
    let col = 0;

    let c = colors;

    for (let i = 15; i >= 0; i--) {

        if(forms.includes(i)) {
            makeForm(width,x - (width/4 * col),x - (width/4 * row),u, c);
        }

        if(i % 4 == 0) {
            row++;
            col = 0;
        }
        else {
            col++;
        }

    }

}

function draw() {

    //image(capture, 0, 0, 480, 480);
    
    prepareGrid();

}

function makeForm(w,x,y,u,colors) {

    noStroke();
    
    let ax = x - u;
    let ay = y - u;
    let bx = x;
    let by = y - u;
    let cx = x - u;
    let cy = y;
    let dx = x - u;
    let dy = y - u;
    let ex = x - u;
    let ey = y - (2*u);
    let gx = x - (2*u);
    let gy = y - u;
    let fx = x - (2*u);
    let fy = y - (2*u);
    
    fill(colors.primary);
    square(ax,ay,u);

    //triangle(x1, y1, x2, y2, x3, y3)

    fill(colors.secondary);
    triangle(ex,ey,dx,dy,bx,by);
    triangle(dx,dy,ex,ey,fx,fy);

    fill(colors.tertiary);
    triangle(fx,fy,gx,gy,dx,dy);
    triangle(gx,gy,dx,dy,cx,cy);
}