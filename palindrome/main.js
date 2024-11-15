let prompt = require('prompt-sync')();

function palindromeVerify(text) {
    text = text.toLowerCase();

    // Regex para remover caracteres que não sejam letras (a-z) ou números (0-9)
    text = text.replace(/[^a-z0-9]/g, '');

    let reverseText;
    reverseText = text.split('').reverse().join('');
    if(reverseText == text){
        return true;
    }

    return false;
}

let text = prompt('Insira um texto para verificar se ele é um palíndromo: ');

if(palindromeVerify(text)) {
    console.log(`O texto: "${text}"; é um palíndromo!`);
} else{
    console.log(`O texto: "${text}"; não é um palíndromo!`);
}