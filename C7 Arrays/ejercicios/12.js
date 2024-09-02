function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código: 
  
  // return array.map(e => e.toUpperCase()); // ---> esta es una manera mas sencilla de realizar este problema.
  
  var nuevo_array = [];
  for(let i=0; i<array.length; i++){
    nuevo_array.push(array[i].toUpperCase());
  }
  return nuevo_array;

}

module.exports = convertirStringAMayusculas;
