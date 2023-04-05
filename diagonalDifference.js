const arrayNum = [[11, 2, 4, 1],[4, 5, 6, 2],[10, 8, -12, 2], [20, 21, 20, 21]];

console.log(diagonalDifference(arrayNum));

function diagonalDifference(arr) {
    let diff = 0;
    let diag1 = 0;
    let diag2 = 0;

    let count = arr.length-1;

    for (let i = 0; i < arr.length; i++){
        diag1 = diag1 + arr[i][i];
        
        diag2 = diag2 + arr[i][count];
        count--;
    }

    diff = diag1 - diag2;

    if(diff < 0) {
        diff = diff * -1;
    }

    return diff;
}