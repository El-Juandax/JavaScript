/*switch
switch (expresion){
    case valor1
    declaracion
    break
}
Concicional que permite evaluar varios escenarios de la misma declaracion
*/

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

/*Ejercico 2
Por medio de un Switch, solicitar al usuario del 1 al 12, el
programa deberá escribir por consola el mes al que corresponde
respectivamente 1=Enero 2=Febrero etc

Y en caso de que el usuario ingrese cualquier otro número al programa
indique "Mes no encontrado"

*/

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
*/

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

/*Ejercicio 4

El mes de mayo tiene 31 días, vamos a hacer un programa que le
solicite al usuario un numero del 1 al 31, dependiendo del dia que digite,
el programa devolverá el día de la semana al que corresponde

Es decir si el usuario digita 5 debe decir que ese dia es viernes, y asi
para los demás días del mes de Mayo de 2023.

*/

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

// Ejercicios de practica

/*Ejercicio 1
Escribe un programa que pida 3 números y escriba
en la pantalla el mayor de los tres, (if, else, &&)
*/

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

/*Ejercicio 2
Escriba un programa que solicite el total de una 
cuenta, tenga la opcion de agregar una propina del 
15%, agregar el iva del 10%, el iva debe ser
calculado sin el valor de la propina y finalmente
muestre cuanto es la cuenta total del cliente. (If, else,
operadores matematicos)
*/

var cuenta = parseFloat(prompt('Escriba el valor de la cuenta'));
var propina = prompt('¿Desea agregar una propina del 15%? escriba si para afirmar o no para negar');

cuenta *= 1.10;

if (propina =='si' || propina =='Si' || propina =='SI'){
    console.log('La cuenta tiene un valor total de: ' + (cuenta * 1.15));
}
else{
    console.log('La cuenta tiene un valor total de: ' + cuenta);
}

/*Ejercicio 3
En una tienda de coches se quiere redirigir a un 
cliente a una sección de acuerdo al tipo de 
coche que elija. Si elige tipo gasolina 1 se le 
enviara a la oficina numero 100. Si elige el tipo 
diesel o 2 ira a la oficina 200 y si elige electrico 
o 3 se le enviara a la oficina 300 (switch). 
*/

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
}