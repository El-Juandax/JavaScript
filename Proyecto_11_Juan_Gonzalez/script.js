const body = document.querySelector("body"); 
const toggle = document.getElementById("toggle");
/* metodo toggle() objeto por defecto en false si se llama se pone en verdadero  */

toggle.addEventListener("click", () => {
    toggle.classList.toggle("toggleBlanco"); //cambiar color del toggle
    body.classList.toggle("toggleBlanco"); /*cambiar color del fondo*/
})
