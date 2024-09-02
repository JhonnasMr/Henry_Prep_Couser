function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  // return array.filter(e => e%2==0); //-----> esta es una marena mas sencilla de realizar este problema. 

  var nuevo_array = [];
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 === 0) nuevo_array.push(array[i])
  }
  return nuevo_array;
}

console.log(filtrarNumerosPares([1,2,34,4,5,6,7,8]))

module.exports = filtrarNumerosPares;
