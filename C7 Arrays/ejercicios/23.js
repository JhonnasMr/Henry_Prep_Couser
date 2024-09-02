function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, 
  // debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var result = [];
  var current = num;

  for(let i=0; i<10; i++){
    if( current + 2 == 10 ) return "Se interrumpió la ejecución";
    result.push(current+2);
    current += 2;
  }
  return result;
}

console.log(breakStatement(10));

module.exports = breakStatement;
