function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  // --------------------------------
  // return arrayOfNums.reduce((acc, element) => acc + element, 0);
  // --------------------------------
  var value = 0;
  for(let i = 0; i<arrayOfNums.length; i++){
    value += arrayOfNums[i];
  }
  return value;
}

module.exports = agregarNumeros;
