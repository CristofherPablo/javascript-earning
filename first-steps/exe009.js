/*
for(var x = 1; x <= 10; x++){
    console.log(`${x}`);
}


var x = 1;
while(x<= 10){
    console.log(`${x}`)
    x++;
}


let num = [4, 5, 6, 7, 8];
for (let pos in num){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

*/
let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
};

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

