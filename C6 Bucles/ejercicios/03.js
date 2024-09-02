function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  // -------------------------------------------------------------------------
  return Math.max(x, y); // esta es una manera muy censilla de resolvlerlo.
  // -------------------------------------------------------------------------
  // if (x > y) return x;
  // if (x < y) return y;
  // return x;
}

module.exports = obtenerMayor;
