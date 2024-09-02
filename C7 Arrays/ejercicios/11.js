function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var nuevo_array = [];
  for(let i=0; i<array.length; i++){
    nuevo_array.push(array[i]*2);
  }
  return nuevo_array;
}

module.exports = duplicarElementos;
