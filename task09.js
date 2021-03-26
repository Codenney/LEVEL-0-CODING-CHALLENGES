function listOfVowels(string){

    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var newVowel;
    for(i = 0; i < string.length; i++){
        for(string[i] in vowel){
            newVowel += string[i];
        } 
    }
    console.log(newVowel);
}

listOfVowels("myname");

/* Write a function that takes in a string and then prints out all the vowels in the string. 
Make sure it can deal with capital letters and small letters.

For example, Input: "Umuzi", Output: Vowels: u, i.*/