// Dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado 
// feito de asteriscos de lado de tamanho n;
// Para esse segundo exercício, faça o mesmo que antes, 
// mas que imprima um triângulo retângulo com 5 asteriscos de base.  

let n = 5;
soma = '';  // var soma fora do for (loop) 

for (i= 0; i < n; i++){
    soma = soma + '*';             // var soma dentro do for inicia com o                           
    console.log(soma);             // soma de fora;     
}