const deg = 6;

const horas  = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

})

function calcularTiempo(){   //funcion
    //LET = declarar variables 
    //Date = objeto de Js que captura la hora que tiene localmente el sistema se puede guardar en una variable y utilizar como uno quiera
      
    let tiempo = new Date(); //Hora local del sistema
  
    //Date.prototype.getHours() metodos que se usa para obtener la hora
    //Date.prototype.getMinutes() metodo que se usa para obtener los minutos
    //Date.prototype.getSeconds() metodo que se usa para obtener los segundos
  
    let hora = tiempo.getHours(); //obtiene por separado los minutos horas y segundos
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
  

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;   //Esto hace que el reloj se vea 01:02:13 y no 1:2:13
    segundo = segundo < 10 ? "0" + segundo : segundo;
  
    //Element.innerHTML establece la sintaxis de html para insertar el reloj
  
    let pantallaRelojMañana = hora + ":" + minuto + ":" + segundo + " Am"; 
    let pantallaRelojTarde = hora-12 + ":" + minuto + ":" + segundo + " Pm";  //Pantalla del reloj 
    let relojdigital = document.querySelector(".relojDigital");  // Se guarda el reloj el .Reloj es la clase del index 
  
    if(hora>12){
        relojdigital.innerHTML = pantallaRelojTarde; 
    } else{
            relojdigital.innerHTML = pantallaRelojMañana;    
     }


  }
  
  setInterval(calcularTiempo, 1000); //Esto hace que el reloj se actualiza cada un 1000 milisegundos=1 segundo