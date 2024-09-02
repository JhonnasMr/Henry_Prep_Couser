function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var nuevo_array = [];
  for(let i = array.length-1; i >= 0; i--){
    console.log(`index : ${i} , array[i] : ${array[i]}`);
    nuevo_array.push(array[i]);
  }
  return nuevo_array;
}

module.exports = invertirArray;
