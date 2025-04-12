let num = 90;
switch(num){
    case 8:
        console.log(`Número ${num} é correto`);
        break;
        case 7:
            console.log(`Número ${num} não e correto, mas é próximo`);
            break;
        case 9:
            console.log(`Número ${num} não é correto, mas é próximo`);
            break;
}
//console.log(2**3**2)
//console.log(2**3)**2)

let num2 = Math.pow(3,2)+3**2;
switch(true){
    case num2 %2 ==0:
    console.log(`O número ${num2} é par.`)
    break;
    case num2 %2 ==1:
        console.log(`O número ${num2} é ímpar.`)
        break;
        default:
            console.log(`O número ${num2} não é par nem ímpar`)
}