function commonLetters(firstString, secondString){

    var commonCharacter = [];

    for(i = 0; i < firstString.length; i++){

        firstString = firstString.toLowerCase();
        secondString = secondString.toLowerCase();

        var includeString = secondString.includes(firstString[i]); /* This checks if the firstString character is in the second string and return a boolean.*/
        if(includeString){
            if(commonCharacter.includes(firstString[i]) == false){
                commonCharacter.push(firstString[i]);
            }
            
        }
        // var commonCharacters = commonCharacter.join();
    }
    console.log("'Common letters: " + commonCharacter + "'");
}

commonLetters("house", "computers");




/*Make a function that takes two strings as input, and outputs the common characters/letters that they share. 
(For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)*/