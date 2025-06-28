function anoBienal(numI,numF){
    min = Math.min(numI,numF);
    max = Math.max(numI,numF);
    lista = [];
    let excluidos = [2020]
    for(let i = min; i<=max; i++){
        if(i%2 == 0 && !excluidos.includes(i)){
            lista.push(i);
        }
    }
    return lista
}
console.log(anoBienal(1990,2025))