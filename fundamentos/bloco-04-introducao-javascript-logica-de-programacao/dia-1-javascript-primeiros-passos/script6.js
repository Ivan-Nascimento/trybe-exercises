// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = "Torre";
let lowerpecaXadrez = pecaXadrez.toLowerCase();

if (pecaXadrez === "rei") {
    console.log("move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
}

else if (pecaXadrez === "rainha") {
    console.log("mover-se pelas colunas, fileiras e diagonal de outra cor.");
}

else if (pecaXadrez === "cavalo") {
    console.log("movimenta-se sempre em 'L'.");
}

else if (pecaXadrez === "torre") {
    console.log("movimenta-se em direção reta pelas colunas ou fileiras.");
}

else if (pecaXadrez === "peão") {
    console.log("apenas uma casa para frente e captura outros peões e peças em diagonal.");
}

else {
    console.log("erro, nome de peça inválido.")
}