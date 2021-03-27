function maximumNumber(...args){
    var highValue = [0];

    for(i = 0; i < args.length; i++){
        if(highValue[0] < args[i]){
            highValue[0] = args[i];
        }
    }
    console.log("The highest value is: " + highValue);
    
}

maximumNumber(1,22,3,2);


/* Bonus: How can you change the code so it can take in any number of numbers? Do this without using builtin methods. 
Write your own logic from scratch.

Again, the function should expect a bunch of numbers as input, not an array or list.

Please do not write a whole new function. Upgrade your existing function.

maximum(1,22,3,2)  // this should work*/























// White a function that takes in three numbers and returns the maximum number.

// Do this without using any builtin methods. Write your own logic from scratch.

// The function should expect a bunch of numbers, not an array or list.