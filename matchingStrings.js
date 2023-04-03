const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];

console.log(matchingStrings(strings, queries));

function matchingStrings(strings, queries) {
    let arrResult = [];
    let quant = 0;

    queries.forEach(element => {
        quant = 0;
        if (strings.includes(element)) {
            for (let i = 0; i < strings.length; i++) {
                if (strings[i] === element) quant++;       
            }      
        }
        arrResult.push(quant);
    });

    return arrResult;
}
