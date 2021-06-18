// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.


//GLOBAL SCOPE VARIABLE
let vowels = ["a", "e", "i", "o", "u"];

//Encode Vowel Function
function encodeVowelWord(word){
  // If word beings with vowel, then add "yay" to the end
  // Example: "omelet" becomes "omelet-yay"
  // Example: "eat" becomes "eat-yay"

  // step 0: It is a word
  let myWord = word;

  // step 1: convert word to lower case only
  let lowerCaseWord = myWord.toLowerCase();

  // step 2: I want only the first character of word
  let firstLetter = lowerCaseWord[0] 

  // step 3: compare that first letter to all of the vowels
  for (let index = 0; index < vowels.length; index++){

      if (firstLetter === vowels[index]) {
          // step 4: If firstLetter is the same as a vowel, then add "-yay" to the end of the word
           // step 5: return the word
          return `${myWord}-yay`; //anything-yay
      }
  }

  return ""; 
}
encodeVowelWord("anything");
// console.log(encodeVowelWord("anything")==="anything-yay");
// console.log(encodeVowelWord("anything"));

// TEST code in test_code.js file

/*  --------------------------------------------------------
    encodeConsonantWord() 
*/
function encodeConsonantWord(word) {
  // All consonant letters before the initial vowel get moved the end preceded by a hyphen "-" and add "ay" to the end.
  // Example:"latin" becomes "atin-lay"
  // Example:"cheers" becomes "eers-chay"
  
  // VARIABLES:
  let myWord = word; 
  let finalWord = '';
  let consonantArray = [];

  // step 1: make the word lower case // ex: peter, three
  myWord = myWord.toLowerCase(); 
  
  // PART A: Find where to slice
  // Loop over each letter
  for (let letterIndex = 0; letterIndex < myWord.length; letterIndex++) {
      // console.log(myWord[letterIndex]);
      // PART B: Slice starting where first vowel appears
      if (vowels.includes(myWord[letterIndex])){
          let vowelSlice = myWord.slice(letterIndex)
          // PART C: create my word from the parts
          finalWord = `${vowelSlice}-${consonantArray.join('')}ay`
          return finalWord

      } else {
          consonantArray.push(myWord[letterIndex])
      }
  };
   
 return "";

}
encodeConsonantWord("three");
// console.log(encodeConsonantWord("three")=== "ee-thray");
// console.log(encodeConsonantWord("three"));

// TEST code in test_code.js file

/*  --------------------------------------------------------
    encodeWord()
*/
function encodeWord(word) {
  // Does a given word start with a vowel or a consonant
  //Examples:  "eat" becomes "eat-yay", "latin" becomes "atin-lay", "cheers" becomes "eers-chay"
  
  // Variables
  let wordOutput = '';

  if (vowels.includes(word[0])) {
    wordOutput = encodeVowelWord(word)
    // return wordOutput;
  } else {
    wordOutput = encodeConsonantWord(word)
    // return wordOutput;
  };

  return wordOutput; 
}
encodeWord('animal');
// console.log(encodeWord('animal'));
// console.log(encodeWord('animal') === 'animal-yay')

// TEST code in test_code.js file

/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
  // Variables
  let pigLatinOutput = []
  sentenceArray = text.split(' ')

  for ( let wordIndex = 0; wordIndex < sentenceArray.length; wordIndex ++) {
    let eachWord = encodeWord(sentenceArray[wordIndex])
    pigLatinOutput.push(eachWord)
  }
  return pigLatinOutput.join(' ');
}
encodeText('how are you')
// console.log(encodeText('how are you'));
// console.log(encodeText('how are you') === 'ow-hay are-yay ou-yay');


// TEST code in test_code.js file
