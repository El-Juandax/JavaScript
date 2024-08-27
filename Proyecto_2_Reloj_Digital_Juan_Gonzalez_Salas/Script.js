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

  let pantallaReloj = hora + ":" + minuto + ":" + segundo;  //Pantalla del reloj 
  let relojdigital = document.querySelector(".Reloj");  // Se guarda el reloj el .Reloj es la clase del index 
  relojdigital.innerHTML = pantallaReloj;   //Para que la informacion sea enviada a la pantalla del reloj

}

setInterval(calcularTiempo, 1000); //Esto hace que el reloj se actualiza cada un 1000 milisegundos=1 segundo