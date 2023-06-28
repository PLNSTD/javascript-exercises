const reverseString = function(wordToReverse) {
    let reversedWord = "";
    let i = 0;
    while (wordToReverse.length > 0) {
        reversedWord[i] = wordToReverse[wordToReverse.length - i - 1];
        i++;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
