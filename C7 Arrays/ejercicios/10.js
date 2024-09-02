function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var str = '';
  array.map((e) => e.length > 5 && !str ? str = e : null);
  if(str.length < 5) return undefined;
  return str;
}

module.exports = obtenerPrimerStringLargo;
