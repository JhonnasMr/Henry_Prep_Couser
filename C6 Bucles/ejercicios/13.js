function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  if(num == Math.round(num)) return true;
  return false;
  // si "num" es un nunmero el cual es posible aplicarle una redondeada, significa que no ese un entero
  // y tiene decimales, por lo tanto lo comparo de esta manera num == Math.round(num) si la operacion 
  // anterior es posible, entonces no seran iguales y eso significa que el numero no era entero.
}

module.exports = esEntero;
