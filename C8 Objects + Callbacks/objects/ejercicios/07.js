function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:  
   // nota: estuvo muy dificil pero gracias a que recuerdo los temas de recursividad lo pude resolver y aplicando
   //       quicksort lo mismo que aplique en el ejercicio de C7 Arrays. 
   var nuevo_array = [];
   var izquierda = [];
   var derecha = [];
   var pivote = list.pop();

   if(!pivote) return nuevo_array;

   for(let i=0; i<list.length; i++){
      if(list[i][sortBy] > pivote[sortBy]){
         // console.log("soy lista[i][sortby]: "+list[i][sortBy]+ " --> pivote: " + pivote[sortBy]);
         derecha.push(list[i]);
      }else{
         izquierda.push(list[i]);
      }
   }
   // console.log(`derecha : ${derecha},  izquierda : ${izquierda}`);
   // console.log(derecha);
   // console.log(izquierda);
   return nuevo_array.concat(sort(sortBy, derecha), pivote, sort(sortBy, izquierda));
}

module.exports = sort;
