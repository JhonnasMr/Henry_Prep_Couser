function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  var vocales = ["a","e","i","o","u"];

  if (typeof letra !== "string") return "Dato incorrecto";
  for(let i=0; i<vocales.length; i++){
    if(vocales[i] === letra) return "Es vocal";
  }
  return "Dato incorrecto";
}
console.log(esVocal("hola nenes"))
console.log(esVocal(23))
console.log(esVocal("e"))

module.exports = esVocal;
