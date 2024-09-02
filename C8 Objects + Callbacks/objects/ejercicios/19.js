function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  var users = objetoMuchosUsuarios; 
  for(let i=0; i<users.length; i++){
    users[i]["esPremium"] = true;
  }
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;

