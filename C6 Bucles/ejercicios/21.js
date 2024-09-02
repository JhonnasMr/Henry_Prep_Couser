function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var result = numero;
  if(result <= 0) false;
  while (result>1) {
    if(result!=Math.round(result)) return false
    result = result/2;
  }
  return true;
}

module.exports = esPotenciaDeDos;
