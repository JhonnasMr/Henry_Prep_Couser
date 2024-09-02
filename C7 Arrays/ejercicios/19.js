function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // console.log(arguments);

  var producto = 1;
  var long = arguments.length; 

  if(arguments.length <= 0) return 0;
  
  for(let i=0; i<long; i++){
    producto *= arguments[i];
  }
  return producto;
} 

console.log(multiplicarArgumentos(3,3,3,3));
module.exports = multiplicarArgumentos;
