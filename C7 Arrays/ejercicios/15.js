function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var idx_mayor = null;
  var value_mayor = -Infinity;
  for(let i=0; i<array.length; i++){
    if(!array[i+1] && idx_mayor==null) return i;
    if(array[i] >= array[i+1] && array[i] >= value_mayor){
      idx_mayor = i;
      value_mayor = array[i];
    }
  }
  if(idx_mayor == null) return 0;
  return idx_mayor;
}

module.exports = encontrarIndiceMayor;
