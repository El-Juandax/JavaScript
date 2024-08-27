//query selector permiten capturar en arreglos lo qu eel usuario este haciendo con los botones de la calculadora y  lo que este pasando en la pantalla
//const = constante

const pantalla = document.querySelector(".pantalla"); //guarda todo lo que pase en la pantalla
const botones = document.querySelectorAll(".boton");  //guarde todo lo que el usuario oprima

//element.addevenytlistener evento que va a registrar lo que este sucediendo en pantalla y botones
//foreach = recorre cada uno de los botones
//eventlistener = se usa para generar un click para todos los botones

botones.forEach(boton => { 

    boton.addEventListener("click", () => {
        const presionBoton = boton.textContent; //crear una nueva constante 
        
        if(boton.id == "limpiar"){
            pantalla.textContent = 0; //si presiona c se queda en 0
            return //para que retorne y no siga la secuencia
        }

        //slice = toma lo que esta en un arreglo y lo parta en pedacitos

        if(boton.id == "borrar"){
            if (pantalla.textContent.length == 1 || pantalla.textContent == "SyntaxError"){ //si queda un numero en la pantalla que ponga el 0
                pantalla.textContent = "0";
            } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1); //borre de uno en uno los numeros
        }
        return;
    }
    
    if (boton.id == "igual") {  //operaciones
        if(pantalla.textContent == "SyntaxError"){
            pantalla.textContent = "0";
        } else {
        if (/[\+\-\*\/]{2,}/.test(pantalla.textContent) || /^[\*\/]/.test(pantalla.textContent)) {
            pantalla.textContent = "SyntaxError";
        } else {
         
         try{
        pantalla.textContent = eval(pantalla.textContent); //evalua y realiza la operacion que lea
         } catch {
            pantalla.textContent = "SyntaxError";
         }}}
        return;
    }    
    
        if (pantalla.textContent=="0" || pantalla.textContent=="SyntaxError"){ //si el valor en panatalla es 0 remplazelo por lo que ponga el usuario
            pantalla.textContent = presionBoton; //lo que este en la constante anterior muestrelo en la pantalla
        } else { //agregue los valores que ponga el usuario
            pantalla.textContent += presionBoton;
        }

    })
})
