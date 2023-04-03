arr = [9, 1, 7, 5, 3];
miniMaxSum(arr);

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    let minimum = 0;
    let maximum = 0;
 
    for (let i = 0; i < arr.length; i++){
        if(i >= 0 && i <= 3) {
            minimum = minimum + arr[i];
        }

        if(i >= 1 && i <= 4) {
            maximum = maximum + arr[i];
        }
    }
    
    console.log(minimum + " " + maximum);
}    
