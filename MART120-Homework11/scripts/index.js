var x = 50;
var y = 50;
var diameter = 25;

var x1 = 75;
var y1 = 125;
var diameter1 = 35;

var x2 = 125;
var y2 = 175;
var w = 35;
var h = 55;

var mousex = 0;
var mousey = 0;

function setup()
{
    createCanvas(800,600);
}

function mouseClicked()  
{  
  mousex = mouseX;
  mousey = mouseY;

}
function draw()
    {
    background(50,10,250);
    if(keyIsDown(68))
    {
        x+=5;
    }
    if(keyIsDown(65))
    {
        x-=5;
    }
    if(keyIsDown(83))
    {
        y+=5;
    }
    if(keyIsDown(87))
    {
        y-=5;
    }
    fill(0)
    rect(750,400,15,100)
    fill(24,200,29);
    square(x,y,diameter);
    circle(mousex,mousey,25);
    fill(175,25,200);
    circle(x1,y1,diameter1);
    fill(250,0,0);
    rect(x2,y2,w,h);
    textSize(40);
    if(x1 <= 800)
    {
        x1+=10;
    }
    else
    {
        x1 = -100
    }
    if(y1 <= 600)
    {
        y1+=3;
    }
    else
    {
        y1 = -100
    }

    if(x2 >= -20)
    {
        x2+=-5;
    }
    else
    {
        x2 = 900
    }
    if(y2 <= 600)
    {
        y2+=7;
    }
    else
    {
        y2 = -100
    }

    if(diameter1 <= 200)
    {
        diameter1+=5;
    }
    else if(diameter1 > 200 && diameter1 <=400)
    {
        diameter1+=3;
    }
    else if(diameter1 > 400)
    {
        diameter1 = 25;
    }
    
    
    if(x > 750 && y >400)
    {
        text('You Win!', 600, 300)
    }
}