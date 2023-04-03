const a = [4, 2, 3, 1, 3, 2, 1];

console.log(lonelyinteger(a));

function lonelyinteger(a) {
    let num;
    let quant;

    a.forEach(element => {
        quant = 0;
        
        for (let i = 0; i < a.length; i++) {
            if (a[i] === element) quant++;       
        }

        if (quant < 2) {
            num = element;
        } 
    });
    
    return num;
   
}