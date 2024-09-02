function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var long = array.length;

   return array[Math.floor(Math.random() * long)];
}

module.exports = obtenerElementoAleatorio;
