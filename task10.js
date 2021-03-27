var firstString = "running";
var secondString = "dancing";

var newString;
var notCommon;

for(i = 0; i < firstString.length; i++){
    //console.log(firstString[i]);
    for(i = 0; i < secondString.length; i++){
        if(secondString[i] === firstString[1]){
            newString += firstString[i];
        }
    }
}

console.log(goaway);




/*Make a function that takes two strings as input, and outputs the common characters/letters that they share. 
(For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)*/