function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var numero_inicio = 1;
  var iter = 1;
  
  if(n <= 1) return n;

  do {
    numero_inicio = numero_inicio + (iter+1);
    iter +=1;
  } while (iter < n);
  return numero_inicio;
}

console.log(sumarHastaN(100))

module.exports = sumarHastaN;
