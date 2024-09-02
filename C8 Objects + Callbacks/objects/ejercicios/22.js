function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var word1 = str1.toLowerCase().split("");
   var word2 = str2.toLowerCase().split("");
   if(word1.length != word2.length) return false;
   for (let i = 0; i < word2.length; i++) {
      if(!word1.includes(word2[i])) return false;
   }
   return true;
}

module.exports = esAnagrama;
