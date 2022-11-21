function setup(){
createCanvas(300,300);



}

function draw(){
clear();
background(200);
    var teclaPulsada = keyCode;
console.log("teclaPulsada: "+teclaPulsada);
textSize(35);
switch (teclaPulsada) {
    case 38:
        rect(25,25,50,50);
        text("arriba",100,100);
        break;
    case 40:
        beginShape();
  vertex(25, 25);
  vertex(50, 50);
  vertex(37.5, 37.5);
        text("abajo",100,100);
        break;
    case 39:
        
        text("derecha",100,100);
        break;
        case 37:
            ellipse(50,50,50,50);
        text("izquierda",100,100);
        break;
    default:
        break;
}

}