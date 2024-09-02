function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if(a<=0 || b<=0)return 0;
  if( a==b ) return a;
  var producto = a;
  for (let i=a; i<b; i++){
    // console.log("soy i:"+i);
    producto = producto * (i+1);
    // console.log('soy producto:'+producto);
  }
  return producto
}

module.exports = productoEntreNúmeros;