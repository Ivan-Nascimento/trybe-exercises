// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// P = Porcentagem.

let notaP = 100.005;          // nota entre 0 e 100.

if (notaP > 100 || notaP < 0) {
    console.log("Erro, valores apenas entre 0 e 100"); // coloquei no primiero comando de linha
}

else if (notaP >= 90) {
    console.log("A");
}

else if (notaP >= 80) {
    console.log("B");
}

else if (notaP >= 70) {
    console.log("C");
}

else if (notaP >= 60) {
    console.log("D");
}

else if (notaP >= 50) {
    console.log("E");
}

else if (notaP < 50) {
    console.log("F");
}

else {

}