/*switch
switch (expresion){
    case valor1
    declaracion
    break
}
Concicional que permite evaluar varios escenarios de la misma declaracion


//ejemplo

var dia = parseInt(prompt('Ingresa el número del dia'));

//prompt = solicitar un dato para que lo ingrese el usuario
//parseInt = transformar una variable

switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;   
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;      
    case 7:
        console.log('Domingo');
        break;   
    default: //se usa para cuando no se encuentra un escenario    
        console.log('Dia no encontrado.');
}
*/
/*Ejercico 2
Por medio de un Switch, solicitar al usuario del 1 al 12, el
programa deberá escribir por consola el mes al que corresponde
respectivamente 1=Enero 2=Febrero etc

Y en caso de que el usuario ingrese cualquier otro número al programa
indique "Mes no encontrado"



var mes = parseInt(prompt('Ingrese el número del mes'));

switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;   
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;      
    case 7:
        console.log('Julio');
        break;   
    case 8:
        console.log('Agosto');
        break; 
    case 9:
        console.log('Septiembre');
        break; 
    case 10:
        console.log('Octubre');
        break; 
    case 11:
        console.log('Noviembre');
        break; 
    case 12:
        console.log('Diciembre');
        break; 
    default: 
        console.log('Mes no encontrado.');
}
*/
/*Ejercicio 3
Tenemos un Fruver que cuenta con los siguientes productos vamos a 
hacer un programa usuando switch, que le pida ingresar al usuario
cual es la fruta que desea consultar, y el programa devuelva por 
consola el calor correspondiente

Naranjas 0.59
Manzanas 0.32
Platanos 0.48
Cerezas 3.00
Mangos 2.79
Papayas 2.79


var fruta = prompt('Elija la fruta que desea consultar, la primer letra tiene que ser en mayuscula y la palbra tiene que estar en plural');

switch(fruta){
    case 'Naranjas':
        console.log('Las naranjas tienen un valor de 0.59$ el kilo');
        break;
    case 'Manzanas':
        console.log('Las manzanas tienen un valor de 0.32$ el kilo');
        break;   
    case 'Platanos':
        console.log('Los platanos tienen un valor de 0.48$ el kilo');
        break;
    case 'Cerezas':
        console.log('Las cerezas tienen un valor de 3.00$ el kilo');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('Las papayas y los mangos tienen un valor de 2.79$ el kilo');  //se puede hacer esto para solo poner un console.log
        break;        
    default:
        console.log('Fruta no encontrada');
}   

console.log('¿Hay algo smas que quiera consultar?')
*/
/*Ejercicio 4

El mes de mayo tiene 31 días, vamos a hacer un programa que le
solicite al usuario un numero del 1 al 31, dependiendo del dia que digite,
el programa devolverá el día de la semana al que corresponde

Es decir si el usuario digita 5 debe decir que ese dia es viernes, y asi
para los demás días del mes de Mayo de 2023.



var diaMayo = parseInt(prompt('Ingrese el dia que quiere consultar en el mes de mayo de 2023'));

switch(diaMayo){
    case 1:
    case 8:
    case 15:
    case 22:
    case 29:
        console.log(diaMayo + ' fue Lunes');
        break;
    case 2:
    case 9:
    case 16:
    case 23:
    case 30:
        console.log(diaMayo + ' fue Martes');
        break;
    case 3:
    case 10:
    case 17:
    case 24:
    case 31:
        console.log(diaMayo + ' fue Miercoles');
        break;
    case 4:
    case 11:
    case 18:
    case 25:
        console.log(diaMayo + ' fue Jueves');
        break;
    case 5:
    case 12:
    case 19:
    case 26:
        console.log(diaMayo + ' fue Viernes');
        break;
    case 6:
    case 13:
    case 20:
    case 27:
        console.log(diaMayo + ' fue Sabado');
        break;
    case 7:
    case 14:
    case 21:
    case 28:
        console.log(diaMayo + ' fue Domingo');
        break;
    default:
        console.log('Dia no encontrado');
}
*/
// Ejercicios de practica

/*Ejercicio 1
Escribe un programa que pida 3 números y escriba
en la pantalla el mayor de los tres, (if, else, &&)


var num1 = parseInt(prompt('Ingrese el primer número'));
var num2 = parseInt(prompt('Ingrese el segundo número'));
var num3 = parseInt(prompt('Ingrese el tercer número'));

if (num1>num2 && num1>num3){
    console.log('El número ' + num1 + ' es el mayor de todos');
} else if (num2>num1 && num2>num3){
    console.log('El número ' + num2 + ' es el mayor de todos');
} else if (num3>num1 && num3>num2){
    console.log('El número ' + num3 + ' es el mayor de todos');
} else if (num1==num2 && num1>num3){
    console.log('los números ' + num1 + ' y ' + num2 + ' son mayores que ' + num3);
} else if (num3==num1 && num3>num2){
    console.log('los números ' + num1 + ' y ' + num3 + ' son mayores que ' + num2);
} else if (num3==num2 && num3>num1){
    console.log('los números ' + num2 + ' y ' + num3 + ' son mayores que ' + num1);
} else if (num3==num2 && num3==num1){
    console.log('los números son iguales');
}
*/
/*Ejercicio 2
Escriba un programa que solicite el total de una 
cuenta, tenga la opcion de agregar una propina del 
15%, agregar el iva del 10%, el iva debe ser
calculado sin el valor de la propina y finalmente
muestre cuanto es la cuenta total del cliente. (If, else,
operadores matematicos)
*/
/*
var cuenta = parseFloat(prompt('Escriba el valor de la cuenta'));
var propina = prompt('¿Desea agregar una propina del 15%? escriba si para afirmar o no para negar');

cuenta *= 1.10;

if (propina =='si' || propina =='Si' || propina =='SI'){
    console.log('La cuenta tiene un valor total de: ' + (cuenta * 1.15));
}
else{
    console.log('La cuenta tiene un valor total de: ' + cuenta);
}*/

/*Ejercicio 3
En una tienda de coches se quiere redirigir a un 
cliente a una sección de acuerdo al tipo de 
coche que elija. Si elige tipo gasolina 1 se le 
enviara a la oficina numero 100. Si elige el tipo 
diesel o 2 ira a la oficina 200 y si elige electrico 
o 3 se le enviara a la oficina 300 (switch). 
*/
/*
var gasolina = prompt('Ingrese el tipo de carro que quiere, (escriba Gasolina, Diesel o Electrico, tambien puede poner 1 2 o 3 en ese mismo orden)');

switch(gasolina){
    case '1': case 'Gasolina':
        console.log('Se le redirigira a la oficina numero 100 encargada de los carros con Gasolina');
        break;
    case '2': case 'Diesel':
        console.log('Se le redirigira a la oficina numero 200 encargada de los carros con Diesel');
        break;
    case '3': case 'Electrico':
        console.log('Se le redirigira a la oficina numero 300 encargada de los carros Electricos');
        break;
    default: 
        console.log('Número u opción no disponible');
}*/

/* For 
crea un bucle finito
For(inicio que posicion inicia; condicion hasta donde va el ciclo; actualizacion determina el incremento){}

//se declara la variable si no se a hecho antes 
//HACER UN LISTADO SENCILLO DE NUMEROS CONSECUTIVOS DE FORMA 
//ASCENDENTE DEL 1 AL 12 Y LUEGO DE FORMA DESCENDENTE DEL 12 AL 1
//se puede i+=1 o i++

console.log('Listado ascendente');

for(var i=1; i <=12; i+=1){
    console.log(i);
};

console.log('');
console.log('Listado descendente');

//Listado descendente

for(var i=12; i >=1; i-=1){
    console.log(i);
};

console.log('');

/*Ejercicio 1
a) Aplicar un for y que el programa muestre los numeros del 5 al
25, pero mostrandolos de 5 en 5

console.log('Listado ascendente de 5 en 5');

for(var i=5; i<=25; i+=5){
    console.log(i);
};

console.log('');

/* b)Usando un for reverso mostrar los numeros de 3 en 3 desde
el 24 hasta el 1 de forma descendente 

console.log('Listado descendente de 3 en 3 hasta 1');

for(var i=24; i>=0; i-=3){
   if(i==0){
    console.log(i+1);
   }else {
    console.log(i);
   }
};
console.log('');

/*Ejercicio 2
Usando un bucle for escribir un programa que pida un numero entero y muestre en pantalla una lista
de numeros desde el 0 al valor ingresado por el usuario
console.log('Lista hasta numero puesto por el usuario');
var numLimite = parseInt(prompt('Ingrese el numero hasta donde quiere que llegue la lista'));
for(var i=0; i<=numLimite; i++){
    console.log(i);
}

console.log('');
*/
/*Usando un bucle for escribir un programa que pida un numero entero y muestre una cuenta atras, es 
decir una lista de numeros desde el numero teclado hasta el 0 

console.log('Listado descendente desde el numero ingresado por el ususario')
var numMaximo=parseInt(prompt('Ingrese el numero desde el cual quiere que empiece a descender la lista'));
for(numMaximo; numMaximo>=0; numMaximo--){
    console.log(numMaximo);
}
*/
/*Alert 
es un comando que pone un mensaje en una caja de dialogo dentro del navegador se puede escribit 
window.alert(); o alert();*/

/*Ejercicio 3
A) Usando un bucle for escribir un programa que pida un valor entero y muestre en pantalla por medio de
un alert una lista de numeros desde el 0 al valor tecleado. Los numeros se separan por comas


var mensajeComa = '';
alert('Lista hasta numero puesto por el usuario');
var numLimite = parseInt(prompt('Ejercicio 3 A Ingrese el numero hasta donde quiere que llegue la lista'));
for(var contador=0; contador<=numLimite; contador++){
    if (contador==numLimite){
        mensajeComa += contador + '. ';
    } else {
        mensajeComa += contador + ', ';   
    }
}
alert(mensajeComa);
*/
/*B) Usando un bucle for escribir un programa que pida un numero entero
y muestre en un alert una cuenta atras, es decir, una lista de numeros
desde el numero tecleado hasta el 0. los numeros deben estar separados por coma


var mensajeComa = '';
alert('Lista de numeros descendentes desde el numero tecleado por el usuario');
var numMaximo = parseInt(prompt('Ejercicio 3 B Digite el numero desde el cual quiere qu eempieze el descenso'));
for (numMaximo; numMaximo>=0; numMaximo--){
    if (numMaximo==0){
        mensajeComa+= numMaximo + '.'
    } else {
        mensajeComa+= numMaximo + ', '
    }
};

alert(mensajeComa);
 */

/*While
Es un bucle que ejecuta una sentencia siempre y cuando se cumpla su condicion puede ser infinita si la condicion es false el ciclo se rompe
While(si esta condición es verdadera ejecutara el ciclo){}

var numRifa = parseInt(prompt('Ejercicio sorteo while 1 Bienvenido a nuestro sorteo ingrese su número'));
while(numRifa !=9){
    numRifa= parseInt(prompt('Ingresa otro numero'))
}
alert('Felicitaciones ganaste el numero ganador era: ' + numRifa)

/*Ejercicio 2
A) Escriba un programa while que pregunte una y otra vez si
desea continuar con el programa, siempre que se conteste 
exactamente si (en minusculas y sin tilda).


var confirmar = prompt('Ejercicio 2 while A: Bienvenido ¿desea continuar con el programa? (escriba si en minuscula y sin tilde para continuar o no para terminar)')
while(confirmar == 'si'){
    confirmar = prompt('¿Desea continuar? (Escriba si en minuscula y sin tilde o no para terminar)')
}
alert('Programa finalizado')

/* B) Escriba un programa con while que pregunte una y otra vez si
desea terminar el programa, siempre que se conteste 
exactamente si (en mayusculas y sin tilde)

var confirmar = prompt('Ejercicio 2 while B: Bienvenido ¿desea terminar con el programa? (escriba SI en mayusculas y sin tilde para terminar o no para continuar)')
while(confirmar != 'SI'){
    confirmar = prompt('¿Desea Terminar? (Escriba SI en mayuscula y sin tilde o no para continuar)')
}
alert('Programa finalizado')

/* Do while 
hacer mientras que do while ejecuta aunque sea una vez un codigo 
do=ejecuta la sentencia {} while=valida la condicion primero se ejecutan las sentencias
y luego las valida */

/*Ejecicio 4 Do while 
Tenemos una letra magica y es la P
Hagamos un programa usando do while que solicite al usuario una letra mientras que la letra no
sea P (en Mayusculas) se lo vuelva a pedir
Usar un bucle do while y la ventana alert para los mensajes


var letra = '';

do{
    letra = prompt('Ingrese una letra en mayuscula');
}while(letra != 'P');
alert('Felicitaciones descubriste la letra magica la cual es: ' + letra);

/*En este script se le pide al usuario que teclee dos numeros, el script mostrara la suma y pedira al 
usuario si quiere repetir. Si teclea S repite y si teclea N el programa sale. No acepta otras teclas

var suma, confirmar = '';
do{
    var num1 = parseInt(prompt('Bienvenido al programa, aqui sumaras dos numeros que digites, ingresa el primer numero entero:'));
    var num2 = parseInt(prompt('Ingresa el segundo numero entero:'));
    suma = num1 + num2;
    alert('La suma de los dos numeros es: ' + suma)
    do{
        confirmar = prompt('¿Desea continuar usando el programa?(Teclee S para si o N para no)' );
    }
    while(confirmar != 'S' && confirmar != 'N');
}
while(confirmar == 'S');
    alert('Programa finalizado gracias por usar');
*/

/*Ejercicios practica 2
1.Se requiere un bucle for que genere una lista de todos los 
numeros pares positivos por debajo del numero que 
ingrese el usuario. Los numeros se apareceran en una 
ventana Alert separados por comas*/


var conComa = '';
var numUsuario=parseInt(prompt('Bienvenido, ingrese el numero del cual quiere empezar a descender'));
for(numUsuario; numUsuario>=0; numUsuario-=2){
    if(numUsuario%2==1){
        if(numUsuario-1==0){
            conComa+= (numUsuario - 1) + '.'            
        }
        else{
            conComa+= (numUsuario - 1) + ', '
        }
    } else {
        if(numUsuario==0){
            conComa+=numUsuario + '.' 
        } else {
            conComa+=numUsuario + ', ' 
    }}
}
alert(conComa);

/*2. Escribir un programa que pida al usuario una contraseña.
Si coincide le devolvera el mensaje "Acceso Concedido" y
si no coincide le devolvera el mensaje "Acceso Denegado"
. Solo permite hacer tres intentos despues de esto se 
emitira el ALERT "Usuario Bloqueado" (While, If else)*/


var contrUsuario=prompt('Bienvenido, digite la contraseña que quiera usar');
var contador= 3;
while (contador>=1 && contrUsuario!=contraseña){
    var contraseña = prompt('Digite su contraseña para ingresar al sistema (Te quedan ' + contador + ' intentos)');
    if (contraseña!=contrUsuario){
        alert('Acceso denegado');
        contador -=1;
    } 
} 
if (contador==0){
    alert('Usuario Bloqueado')
} else {
    alert('Acceso Concedido');
}

/*3.Crear un programa con tres opciones: escribir, leer, salir. El
Usuario escribe una de las opciones y en un ALERT se le
indicara la opcion elegida. El programa vuelve a mostrar el 
menu y se repite el proceso. El script acabara cuando se 
seleccione la opcion salir usar Do While y Switch */

var opcion, salida = '';
do{
    opcion = prompt('Bienvenido, ¿Qué opción desea realizar? ¿escribir, leer o salir? escriba tal cual como estan para realizar')
    switch (opcion){
        case 'escribir':
            alert('Escribiendo...');
            break;
        case 'leer':
            alert('leeyendo...');
            break;
        case "salir":
            salida='salir';
            alert('Saliendo...');
            break;
    }
} while (salida != 'salir')
alert('Programa finalizado gracias por usar')