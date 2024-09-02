function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevo_arreglo = [];
   for(let i=0; i<arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0].toLowerCase() == "a"){
         nuevo_arreglo.push(arrayOfStrings[i]);
      }
   }
   return nuevo_arreglo;
}

module.exports = filter;
