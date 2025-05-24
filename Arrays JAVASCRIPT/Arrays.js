const prompt= require ('prompt-sync')({sigint:true});
let car= prompt("Digite um Caractere:" ).toleLowerCase();
if(car == 'a'|| car =='e' || car =='i' || car =='o' || car == 'u'){
    console.log(`O caractere ${car} í uma vogal`);
}else{
    console.log(`${car} não é uma vogal`);
}
let vogais=['a','e','i','o','u']
if(vogais.includes(car)){
    console.log(`${car}é vogal`);
}else{
    console.log(`${car} não é vogal}`);
}