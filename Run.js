const prompt = require('prompt-sync')({ sigint: true });

const maximos = parseInt(3);
let alunos = new Array;

for (var c = 0; c < maximos; c++, alunos[alunos.length] = [prompt(String("Digite o nome do aluno: "))]) {

    if (alunos.length > 0) {
        console.log("Aluno adicionado.");

    } else {
        console.log("Adicione alunos.");
    }
}

c = 0;

do {

    if (c == 0) {
        console.log(`Zero ${c}`);
        c++;

    } else if (c % 2 == 0) {
        console.log(`Par ${c}`);
        c++;

    } else {
        console.log(`Ímpar ${c}`);
        c++;
    }

} while (c < alunos.length);