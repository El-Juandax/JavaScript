const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");   
const inputCVV = document.getElementById("inputCVV");

const mascaraNumero = '####-####-####-####';
const mascaraFecha = '##/##';     //numeros que ingrese el usuario
const mascaraCVV = '###';

let TarjetaNumero = [];
let FechaNumero = [];    //arreglos para poner las mascaras
let cvvNumero = [];

inputTarjeta.addEventListener("keydown", (e) =>{   //escuche al usuario cuando presione una tecla
    if (e.key === "Tab"){
        return;
    }
    e.preventDefault(); //deshabilitar el comportamiento de un input

    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);  //guarda las variables que se crearon
     inputTarjeta.value = TarjetaNumero.join(""); //lo que oprima envielo
});


inputFecha.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();

    ingresoDatos(mascaraFecha, e.key, FechaNumero);
     inputFecha.value = FechaNumero.join("");
});


inputCVV.addEventListener("keydown", (e) =>{
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();

    ingresoDatos(mascaraCVV, e.key, cvvNumero);
     inputCVV.value = cvvNumero.join("");
});



function ingresoDatos(mascara, key, arreglo) {
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    
    if(key === "Backspace" && arreglo.length > 0){ //cada que le de al backspace
        arreglo.pop(); //eliminar la ultima posicion del arreglo
        return;
    }

    if(numeros.includes(key) && arreglo.length + 1 <= mascara.length){       //si aun se puede seguir escribiendo
        if(mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/"){ //si hay un slash o guion pongalo
            arreglo.push(mascara[arreglo.length], key);
        } else {
            arreglo.push(key);
        }
    }
};