// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //alphabet reference key

  function caesar(input, shift, encode = true) {
    // false returns
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }

    //declare result to return as string
    let result = "";

    //define decode part of function
    if (encode === false){
      shift = shift * -1;
    }

    //run for loop of input
    for (let i =0; i < input.length; i++){
      //create a lowercase const for input[i]
      const letter = input[i].toLowerCase();
      //write your shift code
      if (alphabet.includes(letter)) {
        const letterIndex = alphabet.indexOf(letter); //create a letter index from the input
        let shiftedIndex = letterIndex + shift; //create the shifted letter index to return;
        
        //wrap the index around the alphabet
        if (shiftedIndex > 25) {
          shiftedIndex += -26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25) {
          shiftedIndex += 26;
        }

        //define the result
        const shiftedLetter = alphabet[shiftedIndex];
        result += shiftedLetter;
      } else {
        result += letter;
      }
    }
    return result;
  }; //end of function

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
