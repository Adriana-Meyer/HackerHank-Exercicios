console.log(pangrams("The quick brown fox jumps over the lazy cow"));

function pangrams(s) {
    let result = "";
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let arrStr = (s.toLowerCase()).split(" ");
    arrStr = (arrStr.join("")).split("");


    for (let i = 0; i < alphabet.length; i++) {
        if (arrStr.includes(alphabet[i])){
            result = "pangram";
        } else {
            return "not pangram";
        }
    }

    return result;

}