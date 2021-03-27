function listOfVowels(string){
    var userString = string;
    var vowel = ['a', 'e', 'i', 'o', 'u'];

    string = string.toLowerCase();
    var includedVowels = [];

    for(i = 0; i < string.length; i++){
        var includeVowel = vowel.includes(string[i]);
        if(includeVowel){
            if(includedVowels.includes(string[i]) == false){
                includedVowels.push(string[i]);
            }
        }
    }
    console.log("Input: " + userString + ", Output: Vowels: " + includedVowels + ".");
}

listOfVowels("Umuzi");

/* Write a function that takes in a string and then prints out all the vowels in the string. 
Make sure it can deal with capital letters and small letters.

For example, Input: "Umuzi", Output: Vowels: u, i.*/