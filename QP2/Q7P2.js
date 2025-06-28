/*function NumValidos(){
    let resultado = [];
    let excluidos = [44,454,998];

    for(let i = 0; i <= 9000; i++){
      if(
        i % 2 === 0 &&
        i % 6 === 0 &&
        i % 22 !== 0 &&
        !excluidos.includes(i)
      ) {
        resultado.push(i);
      }  
    }
    return resultado;
}
console.log(NumValidos());
*/
// V PROF
function not22(numI,numF){
    min = Math.min(numI,numF);
    max = Math.max(numI,numF);
    lista = [];
    let excluidos = [44,454,998]
    for(let i = min; i<=max; i++){
        if(i%2 == 0 && i % 22 !==0 && !excluidos.includes(i)){
            lista.push(i);
        }
    }
    return lista
}
console.log(not22(0,9000))