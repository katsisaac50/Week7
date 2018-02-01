function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {


    let arr = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        arr.push(i);
    }
    console.log(arr);

    function divisibleBythree(startIndex, stopIndex) {
        if (arr[i] % 3 === 0) {
            console.log('divided by 3');

        }

        function divisibleByfive(startIndex, stopIndex) {
            if (arr[i] % 5 === 0) {
                console.log('divided by 5');
            }

            function divisibleByboth(startIndex, stopIndex) {
                if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
                    console.log('divided by both 3 and 5');

                }
            }
        }
    }
}

threeFive(1, 10, "threeCallback", "fiveCallback");