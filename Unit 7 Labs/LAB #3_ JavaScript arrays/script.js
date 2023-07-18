// Put your solution here
function divideArray(numbers){
    let evens = [];
    let odds  = [];

    for (i=0; i<numbers.length; i++){
        if (numbers[i] % 2 == 0){
            evens.push(numbers[i]);
        } else {
            odds.push(numbers[i]);
        }
    }

    console.log("Even numbers:");

    if (evens.length == 0){
        console.log("None")
    } else {
        evens.sort(function(a, b){return a-b});
        for (i=0; i<evens.length; i++){
            console.log(evens[i]);
        }
    }

    console.log("Odd numbers:")

    if (odds.length == 0){
        console.log("None")
    } else {
        odds.sort(function(a, b){return a-b});
        for (i=0; i<odds.length; i++){
            console.log(odds[i]);
        }
    }
}
