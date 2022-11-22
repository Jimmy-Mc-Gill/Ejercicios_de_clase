
var total=100;
var x=50;
var y=50;
function setup(){
createCanvas(1000,1000);
background(200);


}

function draw(){

while(total>0){;
 if(total% 10==0){
x = 50
y = y+50

 }else{
    x = x+50
 }
 ellipse(x,y,25,25);
total = total-1


}
}