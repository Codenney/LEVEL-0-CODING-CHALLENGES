function evenOrOdd(integer) {
    // The below condition checks in the argument is an even or odd number using the modulo
    if(integer % 2 === 1) {
        console.log("odd");
    } else {
        console.log("even");
    }
}

evenOrOdd(5);