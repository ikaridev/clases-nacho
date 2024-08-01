if(!true)
  {
    console.log('Hola');
  }
else
  {
        console.log('Chau');
  }


let word = 'z'

switch(word)
{
  case 'a':
    console.log('La primera');
    break;
  case 'b':
    console.log('La segunda');
    break;
  case 'c':
    console.log('La tercera');
    break;
  default:
    console.log('No es ninguna');
    break;
}

let numerito = 1

switch(numerito)
{
  case 1:
  case 2:
    console.log('menor a 3');
  case 3:
  case 4:
  case 5:
    console.log('Menor o igual a 5');
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('Mayor a 5');
    break;
  default:
    console.log('No entiendo xd');
    break;
}




let i = 0;
let coleccion = ['a', 'b', 'c', 'd'];

while(i < coleccion.length)
{
  console.log(coleccion[i++]);
};


for(k = 0 ; k < coleccion.length ; k++)
  {
    console.log(coleccion[k]);
  }


do
{
  console.log(i);
}while(i > 10);


