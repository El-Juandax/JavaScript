function msg(){ //se declara la funcion
    console.log('Mensaje de la función');
}

msg();

function msg2(ms){ //los parentesis son parametros
    console.log(ms) //imprima la variable ms
}

var ms = 'Esta es la función 2';
msg2(ms); //se pone los parametros para poder llamar una funcion

function mensajito3(){
   return 'Esta es la funcion 3'; //que nos retorne el mensaje
}

var ms3 = mensajito3(); //asi tambien se puede llamar una funcion
console.log(ms3);

/*Ejercicios
1.Diseñar una funcion que reciba como parametro tres numeros para ser sumados
*/

function sumar (a,b,c){
    return a+b+c;
}

/*var num1 = parseInt(prompt('ingrese el primer numero que quiere sumar'));
var num2 = parseInt(prompt('ingrese el primer numero que quiere sumar'));
var num3 = parseInt(prompt('ingrese el primer numero que quiere sumar'));
*/
var resultado = sumar(1,2,3);
console.log(resultado);

//Ejecicio 2
//argumento opcional

function sumar2(a,b,c=10){ //c=10 declara esta variable como opcional
    return a+b+c;
}

var resultado2 = sumar2(4,6);
console.log(resultado2);

//Ejercicio 3
// funcion como variable

var sumar3 = function (a,b,c=99){
    return a+b+c;
}

var resultado3 = sumar3(10,19);
console.log(resultado3);

//ejercicio 4
//crea una funcion que reciba tres numeros
//como parametro y retorne el numero mayor, 
//si son iguales devolver un string "son iguales"

//var numeromayor = (1,2,3) => {} otra forma de crear una funcion

function numeros(a,b,c){
    if (a==b && a==c){
        return 'son iguales'
    } else if (a>b && a>c){
        return 'el numero mayor es el primero: ' + a;
    } else if (b>a && b>c){
        return 'el numero mayor es el segundo: ' + b;
    } else if (c>b && c>a){
        return 'el numero mayor es el tercero: ' + c;
    } else if (a==b && a!=c){
        return 'el primer y el segundo numero son iguales, el tercero no'
    } else if (a==c && a!=b){
        return 'el primer y el tercer numero son iguales, el segundo no'
    } else if (b==c && b!=a){
        return 'el segundo y el tercer numero son iguales, el primero no'
    }
}

var comprobante = numeros(6,10,7);
console.log(comprobante);

//arreglos= objetos que tienen varios valores
// var bebidad = ['', '', ''] o var bebidad = new array('','','')

//forma 1

var animales = ['Tortuga', 'Oso', 'Zorro', 'Gato', 'Venado', 'Caballo', 'Elefante'];

//forma 2

var animales2 = new Array('Perro', 'Serpiente', 'Leon', 'Pajaro');

console.log(animales.length);

//indice 0 posicion 1

for(var i = 0; i <=animales.length -1; i++){
    console.log(animales[i]);
}

animales2.forEach(function(elemento, indice){
    console.log(elemento, indice); 
    });


    console.log(animales[3]);
    console.log(animales2[1]);

    console.log(animales2); //mostrar que tiene el arreglo

    animales2.push('Mapache'); //se agrega al final
    console.log(animales2);

    animales2.unshift('Orangutan'); // se agreaga al inicio
    console.log(animales2);

    animales2.pop(); //elimina lo ultimo del arreglo
    console.log(animales2);

    animales2.shift(); //elimina el primero
    console.log(animales2);

    var pos = animales2.indexOf('Leon'); //revisar que indice se encuentra leon
    console.log(pos);

    console.log(animales);

    animales.splice(1,3); //borrar ciertas posiciones a partir del indice uno borre tres posiciones
    console.log(animales);
    
    //ejercicio 1

    var frutas = ['Manzana', 'Pera', 'Melon'];
    console.log(frutas);
    frutas.unshift('Papaya');
    frutas.push('Banano');
    console.log(frutas);

    //ejercicio 2

    var numeros = [];

    for(var i=0; i<10; i++){
        numeros.push(prompt('ingrese un numero'))
    }
    console.log(numeros)

    //posicion no indice
    numeros.splice(2,4);
    numeros.shift();
    console.log(numeros);

    numeros.unshift(100);
    numeros.pop();
    console.log(numeros);

