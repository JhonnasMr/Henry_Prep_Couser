function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var numero_inicio = 1;
   var iter = 1;
   
   if(n <= 1) return n;
 
   do {
     if(numero_inicio>100) break;
     numero_inicio = numero_inicio + (iter+1);
     iter +=1;
   } while (iter < n);
   return numero_inicio;
}

module.exports = sumarHastaNConBreak;
