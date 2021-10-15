let salarioBruto = 4000;

// cálculo do INSS

if (salarioBruto <= 1556.94){
    porcentagemDescontoInss = 8;
}

else if (salarioBruto >= 1556.95 || salarioBruto <= 2594.92){
    porcentagemDescontoInss = 9;
}
 else if (salarioBruto >= 2594.93 || salarioBruto <= 5189.82){
    porcentagemDescontoInss = 11;
}

//else if (salarioBruto > 5189.82){
    //porcentagemDescontoInss = 570.88;
//}

descontoInss = (salarioBruto * porcentagemDescontoInss / 100);     
    console.log(descontoInss);
// cálculo do imposto de renda IR

salarioBase = salarioBruto - descontoInss;
console.log(salarioBase);

if (salarioBase <= 1903.98){
        return 0;
}

else if (salarioBase >= 1903.99 || salarioBase <= 2826.65){
    porcentagemDescontoIr = 7.5;
    deducaoImposto = 142.80;
}

else if (salarioBase >= 2826.66 || salarioBase <= 3751.05){
    porcentagemDescontoIr = 15;
    deducaoImposto = 354.80;
}

else if (salarioBase >= 3751.06 || salarioBase <= 4664.68){
    porcentagemDescontoIr = 22.5;
    deducaoImposto = 636.13
}

else if (salarioBase > 4664.68){
    porcentagemDescontoIr = 27.5;
    deducaoImposto = 869.36;
}

salarioLiquido = salarioBase - (salarioBase*porcentagemDescontoIr/100) - deducaoImposto;

console.log(salarioLiquido);


