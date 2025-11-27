// Uma variável podem ter um valor inicial e depois serem alteradas
let myName = "João";
console.log(myName); // João

myName = "Maria";
console.log(myName); // Maria

// Uma variável pode ter um valor inicial e depois ser alterada para outro tipo
// este é um dos "maus" principios de programação em javascript: as variáveis não são tipo fixo

let variable = 50;
console.log(variable); // 50

variable = "Steve";
console.log(variable); // Steve

variable = true;
console.log(variable); // true

// alterar o tipo de valor de uma variável é uma má prática
// o código fica mais dificil de ler e manter

