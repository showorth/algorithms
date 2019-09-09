// defined function
function decrypt(encodedString) {
  const encodedList = encodedString.split('');
  let decodedString = '';

  for (let i = 0; i < encodedList.length; i = i+3) {
      const currentKey = encodedList[i].toString() + encodedList[i+1].toString() + encodedList[i+2].toString();
      decodedString = decodedString +  String.fromCharCode(currentKey);
      }

  console.log(decodedString);

}


// execute
decrypt('083116101112104097110121032105115032099111111108033');