let eventos = []; //arreglo los crea en la web
let arr = []; //los envia al local storage

const nombreEvento = document.querySelector("#nombreEvento"); //guarda lo que este en este input
const fechaEvento = document.querySelector("#fechaEvento"); 
const botonAgregar = document.querySelector("#agregar"); //guarde cuando el usuario le de al boton
const listaEventos = document.querySelector("#listaEventos");

const json = cargar(); //guardar duncion en un json

try{  //si no encuentra datos que siga la ejecucion normal
    arr = JSON.parse(json);  
} catch (error){
    arr=[]
}
eventos = arr? [...arr] : [];

mostrarEventos();

document.querySelector("form").addEventListener("submit", e =>{ //hacer lo que este dentro de la funcion cuando se le al boton submit
    e.preventDefault();  //preventdefault que deje de agregar el evento despues de hacerlo por primera vez
    agregarEvento(); //llamar funcion
});

function agregarEvento(){ //agregue funcion
    if (nombreEvento.value === "" || fechaEvento.value === ""){ //si no hay nombre o fecha no haga nada
        return;
    }

    if (diferenciaFecha(fechaEvento.value) < 0){ //si la fecha es una pasada no haga nada
        return;
    }

    const nuevoEvento = {  //guardar datos del evento
        id: (Math.random() * 100).toString(36).slice(3), //generar un id random y recoja tres digitos
        nombre: nombreEvento.value, //guarde el nombre con lo que el usuario ponga
        fecha: fechaEvento.value,
    };

    eventos.unshift(nuevoEvento); //Enviar lo del evento al arreglo

    guardar(JSON.stringify(eventos)); //guarde los objetos como jsons

    nombreEvento.value=""; //dejar en blanco el input

    mostrarEventos(); //llame funcion
}

function diferenciaFecha(destino){
    let fechaDestino = new Date(destino);  //guarde la fecha que ponga el usuario
    let fechaActual = new Date(); //guarde la fecha actual
    let diferencia = fechaDestino.getTime() - fechaActual.getTime(); //reste esas fechas getTime=coja todo el tiempo
    let dias = Math.ceil(diferencia / (1000 * 3600 * 24)); //redondee a dias
    return dias; 
}

function mostrarEventos(){
    const eventosHTML = eventos.map((evento) =>{
        return `
        <div class="evento">
          <div class="dias">
            <span class="diasFaltantes">${diferenciaFecha(evento.fecha)}</span>
            <span class="texto">días para</span>
          </div>
          
            <div class="nombreEvento">${evento.nombre}</div>
            <div class="fechaEvento">${evento.fecha}</div>
            <div class="acciones">
               <button data-id="${evento.id}" class="eliminar">Eliminar</button> <!--elimine lo que este en ese id-->
               </div>
        </div>
        `;
    });

    listaEventos.innerHTML=eventosHTML.join("");
    document.querySelectorAll('.eliminar').forEach(button =>{
        button.addEventListener("click", e =>{
            const id = button.getAttribute('data-id');
            eventos = eventos.filter(evento => evento.id !== id);  //todo esto elimina el evento

            guardar(JSON.stringify(eventos));
            
            mostrarEventos();
        });
    });
}

function guardar(datos){
    localStorage.setItem("lista", datos); //agregar datos al localstorage
}

function cargar(){
    return localStorage.getItem("lista");
}