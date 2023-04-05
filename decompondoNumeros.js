decompoeNumero(7);

function decompoeNumero(maxDigit) {

    let indexMax = (maxDigit * 1111); 

    for(let i = 1000; i <= indexMax; i++) {
        let num = i;
        let arrStrDig = num.toString().split("");
        let arrDig = arrStrDig.map(Number);
        let soma = 0;

        for(let j = 0; j < arrDig.length; j++) {
            if (arrDig[j] <= maxDigit){
                soma = soma + arrDig[j];
            } else {
                soma = 0;
            }
        }              

        if (soma === 21) {
            console.log(num);
        }
    
    }
}