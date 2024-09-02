function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var nuevo_string = '';
  var datos = [str1, str2, str3];
  // ["123","abc","str3"]
  if(str1.length == 0 && str2.length==0 && str3.length==0) return nuevo_string;
  for(let i=0; i<datos.length; i++){
    if(datos[i] == ""){
      nuevo_string += ""
    }else{
      nuevo_string += datos[i][0];
    }
  }
  return nuevo_string + combine(str1.slice(1), str2.slice(1),str3.slice(1));
}

// Aqui use recursividad, se que esto es todavia muy avanzado para esta etapa pero lo pude recordar, 
// ya que yo antes resolvi cosas como estas con recursividad, cuando estaba en HENRY, hace como 2 años.

module.exports = combine;