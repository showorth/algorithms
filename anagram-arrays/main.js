// defined function
function setAnagramSort(wordList) {
    let anagramList = [];

    for (let i = 0; i < wordList.length; i++) {
        const currentWord = wordList[i];
        let hasMatch = false;

        if (anagramList.length > 0) {

            for (let j = 0; j < anagramList.length; j++) {
                const compareWord = anagramList[j][0];

                if (currentWord.length === compareWord.length) {
                    let matchCount = 0;
                    for (let k = 0; k < currentWord.length; k++) {
                        const currentLetter = currentWord.charAt(k);

                        if (compareWord.match("[" + currentLetter + "]")) {
                            matchCount++;
                        }
                    }

                    if (matchCount === compareWord.length) {
                        anagramList[j].push(currentWord);
                        hasMatch = true;
                    }
                }
            }
        }

        if (!hasMatch) {
            anagramList.push([currentWord]);
        }

    }

    console.log(anagramList);

}

function setAnagramSort2(wordList) {
    let anagramList = [];
    let wordMap = {};

    for (let i = 0; i < wordList.length; i++) {
        const currentWord = wordList[i];
        const sorted = currentWord.split('').sort();

        if (wordMap[sorted]) {
            wordMap[sorted].push(currentWord);
        } else {
            wordMap[sorted] = [ currentWord ];
        }
    }

    Object.keys(wordMap).forEach((key) => {
        anagramList.push(wordMap[key]);
    })
        

    console.log(anagramList);

}

// execute
setAnagramSort(['designer', 'airmen','part', 'redesign', 'marine', 'swap', 'rapt','trap', 'wasp', 'remain', 'resigned']);
setAnagramSort2(['designer', 'airmen','part', 'redesign', 'marine', 'swap', 'rapt','trap', 'wasp', 'remain', 'resigned']);