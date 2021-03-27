function fahrenheitConverter(celsiusDegree){
    console.log((celsiusDegree * (9 / 5)) + 32);
}

function celsiusConverter(fahrenheitDegree){
    console.log((fahrenheitDegree - 32) * (5 / 9));
}

fahrenheitConverter(0);
celsiusConverter(84);


// Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. 
// Write another function that does the opposite (Fahrenheit to Celsius)