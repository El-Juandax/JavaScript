document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");
let botonAudio = new Audio('./audio/Slice.wav')
let carne = 'on';

function animacionMenu(){
    if (carne=='on'){
    carne = 'off';
    botonAudio.play();
    barra1.classList.toggle("fila1Animacion");
    barra2.classList.toggle("fila2Animacion");
    barra3.classList.toggle("fila3Animacion");
    }else {
    carne='on';
    barra1.classList.toggle("fila1Animacion");
    barra2.classList.toggle("fila2Animacion");
    barra3.classList.toggle("fila3Animacion");
    }
}