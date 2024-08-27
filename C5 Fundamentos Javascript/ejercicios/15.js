function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if(typeof num != "number") return "Escriba un numero natural.";
  if(num % 2 == 1) return false;
  return true;
}

module.exports = esPar;
