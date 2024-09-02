function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:   -----------------------> este es un ejemplo del 
  // algoritmo de ordenamiento Quicksort o 'divide y venceras'.
  if(array.length <= 1)return array;
  
  var izquierda = [];
  var derecha = [];
  var save = [];
  var long = array.length;
  var pivote = array.pop();

  for(let i=0; i<long; i++){
    if(array[i] <= pivote) izquierda.push(array[i]);
    if(array[i] > pivote) derecha.push(array[i]);
  }
  return save.concat(ordenarArray(izquierda),pivote, ordenarArray(derecha));
}

module.exports = ordenarArray;
