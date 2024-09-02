function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var iter = 0;
  var result = num;
  do {
    iter+=1;
    result+=5;
  } while (iter < 8);
  return result;
}

module.exports = doWhile;