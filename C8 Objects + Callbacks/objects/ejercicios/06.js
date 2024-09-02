const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var total = 0;

  for(let i in objeto){
    if(i != undefined){
      total++
    }
  }
  return total;
};

module.exports = contarPropiedades;
