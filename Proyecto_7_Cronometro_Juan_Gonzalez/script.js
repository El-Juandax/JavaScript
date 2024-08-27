let hr = mn = sg = ms = "0" + 0, iniciarTiempo;  //variables

const botonIniciar = document.querySelector(".iniciar"); //de todo lo que pase en iniciar
const botonDetener = document.querySelector(".detener"); //de todo lo que pase en detener
const botonReiniciar = document.querySelector(".reiniciar"); //de todo lo que pase en reinicar

botonIniciar.addEventListener("click", iniciar);  //escuche una funcion
botonDetener.addEventListener("click", detener);  
botonReiniciar.addEventListener("click", reiniciar);

function iniciar () {
    botonIniciar.classList.add("on"); //intercambiar clases

    iniciarTiempo = setInterval (()=> {
        ms++;  //sumar de uno en uno milisegundo
        ms = ms < 10 ? "0" + ms : ms; //pone el cero a la izquierda

        if (ms == 100){
            sg++
            sg = sg < 10 ? "0" + sg : sg;
            ms = "0" + 0;   //volver los milisegundos a cero
        }
        if(sg == 60){
            mn++
            mn = mn < 10 ? "0" + mn : mn;
            sg = "0" + 0;
        }
        if(mn == 60){
            hr++
            hr = hr < 10 ? "0" + hr : hr;
            mn = "0" + 0;
        }

        ingresarValor() //para que los valores se agreguen a la pantalla 
    }, 10); //que se refresque el cronometro cada segundo
}

function detener(){
    botonIniciar.classList.remove("on"); //remover esta clase 
    clearInterval(iniciarTiempo); //detener el intervalo
}

function reiniciar(){
    botonIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = "0" + 0; //pone todo en 0
    ingresarValor(); 
}

function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}