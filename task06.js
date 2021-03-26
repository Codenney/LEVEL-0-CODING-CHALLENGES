function maximumNumber(firstNumber, secondNumber, thirdNumber){

    if(firstNumber > secondNumber && firstNumber > thirdNumber){
        return firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        return secondNumber;
    } else {
        return thirdNumber;
    }
}

console.log(maximumNumber(4,5,8));


/* Bonus: How can you change the code so it can take in any number of numbers? Do this without using builtin methods. 
Write your own logic from scratch.

Again, the function should expect a bunch of numbers as input, not an array or list.

Please do not write a whole new function. Upgrade your existing function.

maximum(1,22,3,2)  // this should work*/




// White a function that takes in three numbers and returns the maximum number.

// Do this without using any builtin methods. Write your own logic from scratch.

// The function should expect a bunch of numbers, not an array or list.