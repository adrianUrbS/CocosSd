function setup() {
    canvas = createCanvas(640, 480);
    background("red");
    cocos = ml5.objectDetector("cocossd", listo)
}
function preload() {
    foto = loadImage(localStorage.getItem("foto"));
}
function draw() {
    foto.resize(640, 480);
    image(foto, 0, 0, 640, 480);
    if (detectado) {
        document.getElementById("estatus").innerHTML = lista.length + " objetos detectados";
        for (var i = 0; i < lista.length; i++) {
            elemento = lista[i];
            noFill()
            stroke("blue")
            strokeWeight(7)
            rect(elemento.x, elemento.y, elemento.width, elemento.height)
            fill("yellow")
            noStroke()
            textSize(25)
            confianza = Math.round(elemento.confidence * 100);
            texto = elemento.label + " " + confianza + "%";
            text(texto, elemento.x, elemento.y);
        }
    }
}
function listo() {
    console.log("cocossd esta listo")
    cocos.detect(foto, respuesta)
}
var detectado = false;
var lista = [];
function respuesta(error, resultados) {
    if (!error) {
        console.log(resultados);
        detectado = true;
        lista = resultados;
    }
}
function siguiente(numero) {
    switch (numero) {
        case 1:
            localStorage.setItem("foto", "dog_cat.jpg");
            break;
        case 2:
            localStorage.setItem("foto", "descarga.jpg");
            break;
        case 3:
            localStorage.setItem("foto", "coches.jpg");
            break;
        case 4:
            localStorage.setItem("foto", "IMG-20220715-WA0091.webp");
            break;
        case 5:
            localStorage.setItem("foto", "descarga (1).jpg");
            break;
    }
    window.location = "cocossd.html"
}