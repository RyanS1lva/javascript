let prompt = require('prompt-sync')();

function verifyCpf(cpfUser) {
    let cpfFormated = cpfUser.replace(/[.\-]/g, '');
    let currentNumber = 0;
    let previousNumber = 0;
    let count = 0;
    let sumTenNumbers = 0;
    let remainderTen = 0;
    let sumElevenNumbers = 0;
    let remainderEleven;

    if(cpfFormated.length == 11){
        for(let i = 0; i <= cpfFormated.length; i++) {
            if(i < 1) {
                previousNumber = cpfFormated[i];
            } else {
                previousNumber = currentNumber;
                currentNumber = cpfFormated[i];
            }

            if(currentNumber == previousNumber) {
                count++;
            }
        }

        if(count == 11) {
            return false;
        }

        let multiplier = 10;
        for(let i = 0; i < 9; i++) {
            sumTenNumbers += cpfFormated[i] * multiplier;
            multiplier--;
        }
        remainderTen = sumTenNumbers % 11;
        if(remainderTen < 2) {
            if(cpfFormated[9] != 0) {
                return false;
            }
        }else {
            if(cpfFormated[9] != (11 - remainderTen)) {
                return false;
            }
        }

        multiplier = 11;
        for(let i = 0; i < 10; i++) {
            sumElevenNumbers += cpfFormated[i] * multiplier;
            multiplier--;
        }

        remainderEleven = sumElevenNumbers % 11;

        if(remainderEleven < 2) {
            if(cpfFormated[10] != 0){
                return false;
            }
        } else {
            if(cpfFormated[10] != (11 - remainderEleven)) {
                return false;
            }
        }

        return true;

    }

    return false;
}



console.log('Bem-vindo ao verificador de CPF');
console.log('');

let cpf = prompt('Digite o CPF a ser verificado: ');

if(verifyCpf(cpf)){
    console.log('CPF válido!');
} else{
    console.log('CPF inválido!');
}

