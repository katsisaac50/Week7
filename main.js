function threeFive(startIndex, stopIndex, threeCallback, fiveCallback, bothCallback) {
    let arr = [];

    for (let i = startIndex; i <= stopIndex; i++) {

        arr.push(i);
    }

    console.log(arr);

    for (let n = 0; n < arr.length; n++) {


        if (arr[n] % 3 === 0 && arr[n] % 5 === 0) {
            bothCallback(arr[n]);
        } else if (arr[n] % 3 === 0) {
            threeCallback(arr[n]);
        } else if (arr[n] % 5 === 0) {
            fiveCallback(arr[n]);
        }
    }
}


function sayThree(n) {
    console.log(n + ' is divided by 3');

}

function sayFive(n) {
    console.log(n + ' is divided by 5');
}

function sayBoth(n) {
    console.log(n + ' is divided by both 3 and 5');

}



threeFive(1, 100, sayThree, sayFive, sayBoth);
