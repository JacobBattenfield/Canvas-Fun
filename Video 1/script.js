let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
document.querySelector("body").style.backgroundColor="navy";


function Circle(x,y,xV,yV,radius){
    this.x = x;
    this.y = y;
    this.xV = xV;
    this.yV = yV;
    this.radius = radius;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle="pink";
        c.stroke();
    }
    this.update = ()=>{
        this.x+=this.xV;
        this.y+=this.yV;
        if(this.x+this.radius>innerWidth||this.x-this.radius<0){
            this.xV= -this.xV;
        }
        if(this.y+this.radius>innerHeight||this.y-this.radius<0){
            this.yV= -this.yV;
        }
        this.draw();
    }
}

var circleArray = [];
for(let i =0;i<100;i++){
    var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var xV = (Math.random()-.5)*8;
    var yV = (Math.random()-.5)*8;
    var radius = Math.round(Math.random()*50);
    circleArray.push(new Circle(x,y,xV,yV,radius));
}

function animateCircle(){
    requestAnimationFrame(animateCircle);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i = 0 ;i < circleArray.length;i++){
        circleArray[i].update();
    }
}
//function call
animateCircle();