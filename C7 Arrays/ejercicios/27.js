function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  // return palabras.reduce((y,z) => y + " " + z, '').trim(); // ---> una forma mas sencilla.
  var new_string = '';
  for(let i=0; i<palabras.length; i++){
    new_string += palabras[i] +' ';
  }
  return new_string.trim();
}

module.exports = dePalabrasAFrase;
