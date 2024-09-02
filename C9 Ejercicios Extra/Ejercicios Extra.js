const invertirTexto = require('../C7 Arrays/ejercicios/31.js');
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var array_objeto = [];
  var allkeys = Object.keys(objeto); // --> ["1", "2", "3"...];
  var allValues = Object.values(objeto);
  console.log(`allKeys: ${allkeys},  allValues: ${allValues}`);
  if(allValues.length > 0){
    for(let i=0; i<allValues.length; i++){
      array_objeto.push([`${allkeys[i]}`, allValues[i]]);
    }
  }else{
    return 'El objeto se encuentra vacio!';
  }
  return array_objeto;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var count_object = {};
  for(let i=0; i<string.length; i++){
    if(count_object[string[i]]){
      count_object[string[i]] += 1;
    }else{
      count_object[string[i]] = 1;
    }
  }
  return count_object;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var mayuscula = '';
  var minuscula = '';
  for (let i = 0; i < string.length; i++) {
    if(string[i] == string[i].toUpperCase()){
      mayuscula += string[i];
    }else{
      minuscula += string[i];
    }
  }
  return mayuscula + minuscula;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  // --------------------------------------
  // return frase.split(" ").map(e => e.split("").reverse().join("")).join(" ");
  // --------------------------------------
  var palabras = frase.split(' ');
  var amirror = [];
  for(let i=0; i<palabras.length; i++){
    amirror.push(invertirTexto(palabras[i]));
  }
  return amirror.join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var alrevez = invertirTexto(String(numero))
  if(Number(alrevez) != numero) return "No es capicua";
  return "Es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var new_string = '';
  for (let i = 0; i < string.length; i++) {
    if(string[i] == "a" || string[i] == "b" || string[i] == "c"){
      continue;
    }else{
      new_string += string[i];
    }
  }
  return new_string;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var array_ordenado = [];
  var izquierda = [];
  var derecha = [];
  var pivote = arrayOfStrings.pop();

  if(!pivote) return array_ordenado;

  for(let i=0; i<arrayOfStrings.length; i++){
    if(arrayOfStrings[i].length <= pivote.length){
      izquierda.push(arrayOfStrings[i]);
    }else {
      derecha.push(arrayOfStrings[i]);
    }
  }
  return array_ordenado.concat(sortArray(izquierda), pivote, sortArray(derecha));
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var intersection = [];
  for(let i=0; i<array1.length; i++){
    for(let l=0; l<array2.length; l++){
      if(array1[i] == array2[l]){
        intersection.push(array1[i])
      }
    }
  }
  return  intersection;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
