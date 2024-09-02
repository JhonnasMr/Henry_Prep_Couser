function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var pedidos = ["Enero","Noviembre","Marzo"];
  var producto = [];
  for(let i=0; i<array.length; i++){
    for(let x=0; x<pedidos.length; x++){
      if(array[i] == pedidos[x]){
        producto.push(array[i]);
      }
    }
  }
  if(producto.length === pedidos.length) return producto;
  return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
