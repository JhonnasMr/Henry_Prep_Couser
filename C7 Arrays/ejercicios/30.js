function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var numeros_recorridos = [];
  for(let i=0; i<numeros.length; i++){
    for(let z=0; z<numeros_recorridos.length; z++){
      if(numeros[i] == numeros_recorridos[z]){
        return numeros_recorridos[z];
      }
    }
    numeros_recorridos.push(numeros[i]);
  }
  return undefined;
}

console.log(encontrarElementoRepetido([1,2,3,4,5,6,1,3,1]))

module.exports = encontrarElementoRepetido;