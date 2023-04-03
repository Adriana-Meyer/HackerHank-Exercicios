const result = timeConversion("08:15:45PM");
console.log(result + '\n');

function timeConversion(s) {

    let strConverted = "";
    let hr = s.slice(0, 2);
    let min = s.slice(3, 5);
    let sec = s.slice(6, 8);
    let timeOfDay = s.slice(8);

    if(timeOfDay === "AM") {
        if (hr === "12") {  
            hr = "00"; 
        }
        strConverted = `${hr}:${min}:${sec}`; 

    } else if(timeOfDay === "PM") {
        if (hr !== "12") {  
            hr = (parseInt(hr) + 12).toString();
        }
        strConverted = `${hr}:${min}:${sec}`   
    }

    return strConverted;
}