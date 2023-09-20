function setup() {
    canvas = createCanvas(640, 480);
    background("red");
}
function preload() {
    foto = loadImage("dog_cat.jpg")
}
function draw() {
    image(foto,0,0,640,480)
}