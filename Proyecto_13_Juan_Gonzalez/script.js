let progreso = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let explosion = document.querySelector(".nula");
let poder = document.querySelector(".poder")
let avance = 0;
let avanceP = 24.5;

let tiempo = setInterval(() => {
    avance += 1;
    avanceP += 0.45;
    progreso.style.width = `${avance}%`
    poder.style.left = `${avanceP}%`

    if(avance === 100){
        clearInterval(tiempo);
        explosion.classList.add("explosion");
        poder.style.opacity = `0`
    }
    porcentaje.textContent = `${avance}%`
}, 75);