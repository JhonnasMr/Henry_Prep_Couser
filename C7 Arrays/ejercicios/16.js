function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // return array.map((e, i) => e*i); // --> esta seria una forma mas sencilla de hacer este ejercicio.
  
  var nuevo_array = [];
  for(let i=0; i<array.length; i++){
    nuevo_array.push(array[i] * i);
  }
  return nuevo_array;
}

module.exports = multiplicarElementosPorIndice;
