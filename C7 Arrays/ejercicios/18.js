function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sum = resultadosTest.reduce((acc, e ) => acc + e, 0);
  return sum / resultadosTest.length;
}

module.exports = promedioResultadosTest;
