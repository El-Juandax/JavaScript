var nombre = 'Juanda';      //define variable
console.log(nombre);        //imprime la variable en la consola
console.log(typeof(nombre)); //imprime que tipo de dato es la variable nombre

var edad = 17;          //dato numerico
console.log(edad);
console.log(typeof(edad));

/*edad = 'diecisiete';
console.log(edad);
console.log(typeof(edad));*/

var salario = 10000.10;  //dato numerico
console.log(salario);
console.log(typeof(salario));

var profesional = true;       //dato booleano
console.log(profesional);
console.log(typeof(profesional));

var profesion;              //dato undefinied
console.log(profesion);

var cargo = null;      //dato objeto
console.log(cargo);
console.log(typeof(cargo));

//Operadores matemáticos

var edadAlberto, edadRicardo, edadPaola, edadXiomara;           //declarar varias variables
var totalEdades, fechaAlberto, fechaRicardo, fechaPaola, fechaXiomara;
var diferenciaEdad;
var presente; 
var edadPropia;
var fechaPropia;

edadAlberto = 50; //asignar datos a las variables 
edadPaola = 37;
edadRicardo = 45;
edadXiomara = 40;
presente = 2024;
edadPropia = 17;

//1-hallar la diferencia de edad entre alberto y xiomara 

diferenciaEdad = edadAlberto - edadXiomara;         //se utiliza la variable para realizar la operación
console.log('La diferencia de edad entre Alberto y Xiomara es: ', diferenciaEdad);
console.log('');

//2-hallar la diferencia de edad entre Ricardo y Paola

diferenciaEdad = edadRicardo - edadPaola;         //se reasigna la variable para realizar la operación
console.log('La diferencia de edad entre Ricardo y Paola es: ', diferenciaEdad);
console.log('');

//3-hallar los años de nacimiento de cada uno

fechaAlberto = presente - edadAlberto;
console.log('El año en el que nació Alberto fue:', fechaAlberto);

fechaPaola = presente - edadPaola;
console.log('El año en el que nació Paola fue:', fechaPaola);

fechaRicardo = presente - edadRicardo;
console.log('El año en el que nació Ricardo fue:', fechaRicardo);

fechaXiomara = presente - edadXiomara;
console.log('El año en el que nació Xiomara fue:', fechaXiomara);
console.log('');

//4-hallar la diferencia de edad de paola con la mia

diferenciaEdad = edadPaola - edadPropia;
console.log('La diferencia de edad entre paola y mi edad es:', diferenciaEdad)
console.log('');

//5-hallar mi año de nacimiento

fechaPropia = presente - edadPropia;
console.log('El año en el que yo naci fue:', fechaPropia);
console.log('');

//6-Totalizar todas las edades

totalEdades = edadAlberto + edadPaola + edadPropia + edadRicardo + edadXiomara;
console.log('El total de todas las edades es de:', totalEdades);
console.log(''); // espacio

//Realizar operaciones matematicas
//operación 1

var num1 = 10;
var num2 = 50;
console.log('La multiplicación entre', num1, 'y', 9, 'es:', 9 * num1);
console.log('La división entre:', num2, 'y', num1, 'es:', num2 / num1);
console.log('');

//operación 2

console.log('El resultado de la operación', 5, '+', 10, '*', 3, 'es:', 5 + 10 * 3);
console.log('El resultado de la operación', num2, '%', 9, '*', num1, 'es:', num2 % 9 * num1);
console.log('El resultado de la operación', num2, '+', num1, '/', 8, '+', 2, 'es:', num2 + num1 / 8 + 2);
console.log('');

//operación 3

console.log('El resultado de la operación', '('+ num2, '+', num1+ ')', '/', '('+ 8, '+', 2 + ')', 'es:', (num2 + num1) / (8 + 2));
console.log('');


/* operadores lógicos = comparación
mayor que >
menor que <
mayor igual >=
menor igual <=
igual ==
*/

var num1 = 8;
var num2 = 100;

//comparar si 8 es menor a 100
var compara = num1 < num2;
console.log('¿8 es menor a 100?:', compara);

//comparar si 8 es mayor o igual a 100
var compara = num1 >= num2;
console.log('¿8 es mayor o igual a 100?:', compara);

//comparar si 100 es menor a 0
var compara = num2 < 0;
console.log('¿' + num2, 'es menor a 0?:', compara);

//comparar si 100 es igual a 100
var compara = 100 == num2;
console.log('¿' + num2, 'es igual a 100?:', compara);

//comparar si 1 es menor a 8
var compara = 1 < num1;
console.log('¿1 es menor a', num1 + '?:', compara);
console.log('');

/*Operadores unarios 

++ incremento       aumentar de uno en uno
--decremento        disminuir de uno en uno

*/

edadPaola;
edadRicardo;

edadPaola++;
console.log('La nueva edad de Paola es:', edadPaola);

edadRicardo--;
console.log('La nueva edad de Ricardo es:', edadRicardo);
console.log('');

//aplicar operadores unitarios en el console.log

//al aplicarlo despues de la variable se realiza el aumento pero no lo muestra, sino que muestra el valor antes del incremento 
console.log(edadAlberto++);
console.log(edadAlberto); //aqui si muestra el cambio

//aplicarlo antes del nombre de la variable realiza el aumento y lo muestra
console.log(++edadAlberto);
console.log(--edadXiomara);
console.log('');

/* operadores de asignación

+=, -=, *=, /=, %=

*/
 //sin operadores de asignación seria así
var a = 15;
var b = 5;

a = a + b;
console.log(a);

// con los operadores de asignación quedaria de la siguiente forma

a+=b;
console.log(a);