// Como definir nomes de variáveis e constantes em JavaScript 
// Nome de variáveis devem ser significativos e descritivos
// Nome de variáveis devem ser em camelCase
// Nome de variáveis devem começar com uma letra, um underline (_) ou um cifrão ($)
// Nome de variáveis não podem começar com um número
// Nome de variáveis não podem conter espaços ou caracteres especiais
// Nome de variáveis não podem ser palavras reservadas do JavaScript

let myName = "João"; // Correto
let _myName =  "João"; // Correto
let $myName = "João"; // Correto
let name1 = "João"; // Correto
let name_1 = "João"; // Correto
let name$1 = "João"; // Correto

let 1name = "João"; // Incorreto - começa com número
let -myName = "João"; // Incorreto - contém caractere especial

// camelCase
let firstName = "Maria";
let lastName = "Silva";

// O javascript diferencia maiúsculas de minúsculas - é case-sensitive
let myAge = 25;
let myage = 30; // Variável diferente de myAge

// IMPORTANTE: Os nomes de variáveis devem ser significativos e descritivos para facilitar a leitura e manutenção do código.
let x = 10; // Ruim - não é descritivo
let userAge = 10; // Bom - é descritivo