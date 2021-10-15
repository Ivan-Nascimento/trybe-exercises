let notaP = 90;          // nota entre 0 e 100.

switch (notaP) {
    case (notaP >= 90):
        console.log("A");
        break;

    case (notaP >= 80):
        console.log("B");
        break;

    case (notaP >= 70):
        console.log("C");
        break;
    
    case (notaP >= 60):
        console.log("D");
        break;

    case (notaP >= 50):
        console.log("E");
        break;

    case (notaP < 50):
        console.log("F");
        break;

    case (notaP > 100 || notaP < 0):
        console.log("Erro, valores apenas entre 0 e 100.");
        break;
        
    default:
        console.log("Erro, valores apenas entre 0 e 100"); 
}
