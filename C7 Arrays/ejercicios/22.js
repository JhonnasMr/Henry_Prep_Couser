function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla_del_6 = [];

  for(let i=0; i<=10; i++){
    tabla_del_6.push(6 * i);
  }
  return tabla_del_6;
}
console.log(tablaDelSeis())
module.exports = tablaDelSeis;
