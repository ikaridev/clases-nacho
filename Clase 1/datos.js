/*

TIPOS DE DATOS

texto (char, string).
numerico (int, float, decimal).
lógico (bool, boolean).
objeto (object).
función (function, referencia a una función).
colección/matriz (Array).
nulo (null).
sin definir (undefined).

*/

'Hola mundo!';
'Hola mundo!' + ' Es un buen dia';
'Hola mundo!' + ' Es el día: ' + 27 + '-0' + 7 + '-' + 24;

'Hola mundo!'.toUpperCase();
'Hola mundo!'.toLowerCase();
'Hola mundo!'.substring(0,4);
'Hola mundo!'.length;
'Hola mundo!'.includes('Holis'); 
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
            
100;
100 + 20;
100 - 20;
100 * 3;

100 / 3;
100 % 2;

(100).toString();

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

true; 
false;

3 == 3;
3 != 3;
3 > 2
3 < 2
3 >= 3
3 <= 3

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

({
  nombre : 'Nacho', 
  edad : 19,
  esScout : true
});

({
  nombre : 'Nacho', 
  edad : 19,
  esScout : true
}).esScout;

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');


function test(){
  'Esto es una function';
   return 'Esto es una function, y retorna un valor'
}

test(); //<- Así se ejecuta un a function

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

({
  nombre : 'Nacho', 
  edad : 19,
  esScout : true,
  gritar : () => {
    return 'AAAAAA!'
  }
}).gritar();

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

['a', 'b', 'c', 'd'].length;
(['a', 'b', 'c', 'd']).push('e');

[1234,'AAAA',false, true, ()=>{return 'function en una Array'}, 0, {nombre: 'Oscar'}];

([1234,'AAAA',false, true, ()=>{return 'function en una Array'}, 0, {nombre: 'Oscar'}])[4]()


console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

null

undefined


/*

TIPOS DE -FORMATO- DE DATOS
-VAR
-LET
-CONST

*/


var ejemplo1 = 10; // DE ACCESO GLOBAL, DINÁMICO

let ejemplo2 = 50; // DE ACCESO 'LOCAL', DINÁMICO

const ejemplo3 = 47; // DE ACCESO 'LOCAL', NO DINÁMICO


ejemplo1 = 30;

ejemplo1 = 25;

ejemplo2 = 70;

console.log(ejemplo2);

//ejemplo3 = 55;


if(true)
{
  var ejemplo1 = 3;
  let ejemplo2 = 5;
  var ejemplo5 = 45;
}

ejemplo1
ejemplo2

ejemplo5
//ejemplo4
