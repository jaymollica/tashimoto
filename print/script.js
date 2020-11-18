
let forms = [];
let formsRev = [];

let palettes = [
    {
    "primary": "green",
    "secondary": "yellow",
    "tertiary": "orange",
    "quaternary": "olive",
    },
    {
        "primary": "dodgerblue",
        "secondary": "chartreuse",
        "tertiary": "lightskyblue",
        "quaternary": "teal",
    },
    {
        "primary": "violet",
        "secondary": "gold",
        "tertiary": "palegoldenrod",
        "quaternary": "hotpink",
    },
    {
        "primary": "darkgreen",
        "secondary": "orange",
        "tertiary": "peachpuff",
        "quaternary": "yellowgreen",
    }
];

let colors;
let capture;

let gridUnit;
let numSquares;

let reverse;

let useReverse = Math.random() <= 0.5;

function setup() {

    createCanvas(480,480);
    background("white");
    
    // capture = createCapture(VIDEO);
    // capture.size(480, 480);
    // capture.hide();

    gridUnit = Math.floor(random(3,6));

    if(gridUnit == 4) {
        numSquares = 15;
    }
    else if(gridUnit == 5) {
        numSquares = 24;
    }
    else if(gridUnit == 3) {
        numSquares = 8;
    }

    let n = int(random(gridUnit, (2.5 * gridUnit) ));
    for (let j = 0; j < n; j++) {
        while(true) {
            let r = int(random(0, (numSquares + 1) ));
            if(forms.includes(r)) {
                continue;
            }
            else {
                forms.push(r);
                break;
            }
        }
    }

    if(useReverse) {
        shuffle(forms);
        let halfForms = Math.ceil(forms.length / 3);    
        formsRev = forms.splice(0,halfForms);


        console.log(forms);
        console.log(formsRev);
    }
    
    colors = random(palettes);
    
}

function prepareGrid() {

    let x = width;
    let y = height;
    let u = width/gridUnit;

    let row = 0;
    let col = 0;

    let c = colors;

    reverse = false;
    for (let i = numSquares; i >= 0; i--) {

        if(forms.includes(i)) {
            makeForm(width,x - (width/gridUnit * col),x - (width/gridUnit * row),u, c, reverse);
        }

        if(i % gridUnit == 0) {
            row++;
            col = 0;
        }
        else {
            col++;
        }

    }

    if(formsRev.length != 0) {
        row = gridUnit;
        col = gridUnit;
        reverse = true;
        for (let i = 0; i <= numSquares; i++) {

            if(formsRev.includes(i)) {
                makeForm(width,x - (width/gridUnit * col),x - (width/gridUnit * row),u, c, reverse);
            }

            if(i % gridUnit == 0) {
                row--;
                col = gridUnit;
            }
            else {
                col--;
            }

        }
    }
    


}

function draw() {

    //image(capture, 0, 0, 480, 480);
    
    prepareGrid();

}

function makeForm(w,x,y,u,colors,reverse) {

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

    let hx = x + u;
    let hy = y - u;
    let ix = x + u;
    let iy = y - (2*u);
    let jx = x;
    let jy = y - (2*u);
    
    fill(colors.primary);
    square(ax,ay,u);

    if(reverse == false) {
        //for left pointing forms
        fill(colors.secondary);
        triangle(ex,ey,dx,dy,bx,by);
        triangle(dx,dy,ex,ey,fx,fy);

        fill(colors.tertiary);
        triangle(fx,fy,gx,gy,dx,dy);
        triangle(gx,gy,dx,dy,cx,cy);
    }
    else {
         //for right pointing forms
        fill(colors.quaternary);
        triangle(bx,by,dx,dy,jx,jy);
        triangle(bx,by,jx,jy,ix,iy);

        fill(colors.tertiary);
        triangle(bx,by,hx,hy,x,y);
        triangle(bx,by,ix,iy,hx,hy);
    }

}