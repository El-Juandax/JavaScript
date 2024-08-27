const navegacion = document.querySelector(".menuPrincipal");
const abrir = document.querySelector(".abrirMenu");   //query selector por id con # por clase es con .
const cerrar = document.querySelector(".cerrarMenu");

abrir.addEventListener("click", () =>{ /*cuando se haga click en abrir que haga lo que este dentro*/
    navegacion.classList.add("visible"); /*que se despliegue el menu cuando se de click en abrir*/
})

cerrar.addEventListener("click", () =>{
    navegacion.classList.remove("visible");//que el menu se cierre cuando se le de a cerrar
})

