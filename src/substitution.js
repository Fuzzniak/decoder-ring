// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //create a standard alphabet key
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = [];

  function substitution(input, alphabet, encode = true) {
    // make sure the alphabet parameter is the correct length and doesn't repeat
    const correctAlphabet = new Set(alphabet);
    if (!alphabet || alphabet.length !== 26 || [...correctAlphabet].length < 26) return false;

    //make sure the input and alphabet parameters are lowercase
    const inputArray = input.toLowerCase().split("");
    const alphabetArray = alphabet.toLowerCase().split("");

    //link the alphabet parameter with standardAlphabet
    if (encode) {
      for (let i = 0; i < 26; i++) {
        cipher[standardAlphabet[i]] = alphabetArray[i];
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[alphabetArray[i]] = standardAlphabet[i];
      }
    }

    //create the output allowing for spaces
    let answer = inputArray.map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter]
    })
    //return the joined output
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
