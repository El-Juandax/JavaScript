const marcoPuntaje = document.querySelector('.puntaje'); //trae la clase del puntaje es el marco
let puntajeActual = 0;   //puntaje actual que inicie en cero
const puntajeLimite = 5;   //puntaje limite 5 estrellas

const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i)=>{ //se crea un arreglo que va a guardar el mapeo 
    return `<div class="item item-${i}" data-pos="${i}"></div>`;  //crea elementos html 
});
marcoPuntaje.innerHTML = htmlMapa.join(''); //inserte al marcoPuntaje 

document.querySelectorAll(".item").forEach(item => { //traer todo lo que este en la clase item  y recorrerlo
    item.addEventListener("mouseover", e =>{  //escuchar cuando el mouse este encima de un item
        //console.log("Funciona");
        const posicion = item.getAttribute("data-pos"); //trae la posicion

        if(puntajeActual === parseInt(posicion) + 1){
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris => {
            if (cuadraditoGris.classList.contains("selec")){ //si encuentra el cuadrado en rojo regreselo a gris
                cuadraditoGris.classList.remove("selec");
            }
        });

        for (let i=0; i<=posicion; i++){  //ciclo que depende de la posicion 
            const cuadradito = document.querySelector(`.item-${i}`);   //guarda el indice del item
            if(!cuadradito.classList.contains("selec")) { //si encuentra el cuadrado en gris que lo ponga del color que elegimos        
                cuadradito.classList.add("selec");            
            }
        } 
        puntajeActual = parseInt(posicion) + 1; 
    
    });

    item.addEventListener("click", (e) =>{   //guarde lo que de click
            const posicion = item.getAttribute("data-pos"); 
            puntajeActual = parseInt(posicion) + 1;
            console.log(puntajeActual);
    });

});