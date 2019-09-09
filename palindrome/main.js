// defined function
function isPalindrome(word) {
    let matchCount = 0;
    const wordList = word.split('');
    const wordListLength = wordList.length;

    for (let i = 0; i < wordListLength; i++) {
        if (wordList[i] === wordList[wordListLength - 1 - i]){
            matchCount++;
        }

    }

    return (matchCount === wordListLength);

}

// execute
const test = isPalindrome('racecar');
console.log(test);

const test2 = isPalindrome('racecars');
console.log(test2);

const test3 = isPalindrome('racecar');
console.log(test3);
