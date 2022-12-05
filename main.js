const gameCanvas = document.getElementById("2d");
function makeLine(x0,y0,x1,y1,width,color) {
    gameContext.beginPath();
    gameContext.lineWidth = width;
    gameContext.strokeStyle = color;
    gameContext.moveTo(x0, y0);
    gameContext.lineTo(x1, y1);
    gameContext.stroke();
}

makeLine(20,20,300,500,30,"blue");
var isMouseDown = false;
var mouseX = 0;
var mouseY = 0;
var previousMouseX = 0;
var previousMouseY = 0;
var brushSize = 5;
function getRandom() {
    return Math.random() * 255;
}
var brushColor = "rgb(" + getRandom() + "," + getRandom() + "," + getRandom() + ")";

window.addEventListener('mousedown', () => {
    isMouseDown = true;
});
window.addEventListener('mouseup', () => {
    isMouseDown = false;
});
window.addEventListener('mousemove', event => {
    previousMouseX = mouseX;
    previousMouseY = mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
});
function frame() {
    window.requestAnimationFrame(frame);
}

window.addEventListener('load', () => {
    window.requestAnimationFrame(frame);
});
function frame() {
    if (isMouseDown) {
        makeLine(previousMouseX,previousMouseY,mouseX,mouseY,brushSize,brushColor);
    }
    window.requestAnimationFrame(frame);
}
