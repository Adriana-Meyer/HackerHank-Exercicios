arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zeros = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive++
        } else if ( arr[i] === 0) {
            zeros++
        } else {
            negative++
        }
    }

    positive = positive / arr.length;
    negative = negative / arr.length;
    zeros = zeros / arr.length;

    console.log((positive).toFixed(6));
    console.log((negative).toFixed(6));
    console.log((zeros).toFixed(6));
}


    
