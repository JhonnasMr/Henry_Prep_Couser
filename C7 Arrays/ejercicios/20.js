function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var pivote = array[0]
  for(let i=1; i<array.length; i++){
    if(array[i] != pivote){
      return false;
    }
  }
  return true;
}
// console.log(todosIguales([1,1,1,1,1,1,1,1]));
// console.log(todosIguales([2,2,2,2,4,5,5]));
// console.log(todosIguales([1,1,1,1,1,1,1,1]));
module.exports = todosIguales;
