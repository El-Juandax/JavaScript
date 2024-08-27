function obtenerTiempoFaltante(fechaLimite){   //funcion con el parametro fecha limite
    let ahora = new Date();   //variable que guarda la fecha de ahora
    let tiempoFaltante = (new Date(fechaLimite)- ahora + 1000)/ 1000; //variable que guarda cuanto tiempo falta en segundos
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2); //variable que guarda cuanto tiempo falta en segundos
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2); //variable que guarda cuanto tiempo falta en segundos
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante /3600 % 24)).slice(-2); //variable que guarda cuanto tiempo falta en segundos
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante /(3600 * 24))).slice(-3); //variable que guarda cuanto tiempo falta en segundos
    
    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    };
};

//console.log(obtenerTiempoFaltante('Dec 25 2024 00:00:00 GMT-0500'));

let papaNoel = 'off';
let papanoelStop = document.getElementById('papanoelquieto');
let botonplay = document.getElementById('play');
let botonpause = document.getElementById('pause'); 
let botonAudio = new Audio ('sound/allWant.mp3');
let botonSonido = new Audio ('sound/botonbailar.mp3');

function cuentaRegresiva(tiempoFaltante,dia,hora,minuto,segundo,cero){ //
    const botonIniciar = document.querySelector(".play");
    const botonDetener = document.querySelector(".pause");
    const e = document.querySelector(".mensaje");
    const d = document.getElementById(dia);
    const h = document.getElementById(hora);
    const m = document.getElementById(minuto);
    const s = document.getElementById(segundo);

    botonIniciar.classList.add('on');
    botonDetener.classList.add('on');


    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        d.innerHTML = `${t.diasFaltantes}`;
        h.innerHTML = `${t.horasFaltantes}`;
        m.innerHTML = `${t.minutosFaltantes}`;
        s.innerHTML = `${t.segundosFaltantes}`;

        if(t.tiempoFaltante < 0){
            clearInterval(tiempoActual);
            e.textContent = '¡Feliz Navidad!';
            d.innerHTML = cero;
            h.innerHTML = cero;
            m.innerHTML = cero;  
            s.innerHTML = cero; 
            
            papaNoel = 'on';
            papanoelStop.classList.add('on');
            botonDetener.classList.remove('on');
            botonIniciar.classList.remove('on');

        }

    },1000)
};

function botonclick(){
    const botonIniciar = document.querySelector(".play");
        botonIniciar.classList.add('on');
    botonplay.addEventListener('click', ()=>{
        botonAudio.play();
    })
    botonplay.addEventListener('click', ()=>{
        botonSonido.play();
    })
}

function botonPclick(){
    const botonIniciar = document.querySelector(".play");
    botonIniciar.classList.remove('on');
    botonpause.addEventListener('click', ()=>{
        botonSonido.play();
    })
    botonpause.addEventListener('click', () =>{
        botonAudio.pause();
    })

}

cuentaRegresiva('Jul 19 2024 17:50:00 GMT-0500', 'dia','hora','minuto','segundo','00');