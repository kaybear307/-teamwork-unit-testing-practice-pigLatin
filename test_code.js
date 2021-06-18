
//TEST-VOWELS
function testEncodeVowelWord(){
    //1st TEST: "eat" becomes "eat-yay"
    // Variable
    let result = encodeVowelWord("eat");

    // console.assert
    console.assert(
        result === "eat-yay",
        JSON.stringify({
            test: "encodeVowelWord('eat')",
            expected: "eat-yay",
            result: result,
        })
    );

    //2nd TEST: "omelet" becomes "omelet-yay" 
    result = encodeVowelWord("omelet");

    // console.assert
    console.assert(
    result === "omelet-yay",
        JSON.stringify({
        test: "encodeVowelWord('omelet')",
        expected: "omelet-yay",
        result: result,
        })
    );

};
testEncodeVowelWord();

// TEST- Consonant
function testEncodeConsonantWord(){
    //1st TEST: "latin" becomes "atin-lay" 
    // Variable
    let result = encodeConsonantWord('latin');

    // console.assert
    console.assert(
        result === "atin-lay" ,
        JSON.stringify({
            test: "encodeConsonantWord('latin')",
            expected: "atin-lay",
            result: result,
        })
    );

    //2nd TEST: "cheers" becomes "eers-chay"
    // Variable
    result = encodeConsonantWord('cheers');
    
    // console.assert
    console.assert(
        result === "eers-chay",
        JSON.stringify({
            test: "encodeConsonantWord('cheers')",
            expected: "eers-chay",
            result: result,
        })
    );
 };
 testEncodeConsonantWord()

 // TEST- Word
 function testEncodeWord() {
    //1st TEST: "winter" becomes "inter-way"
    // Variable
    let result = encodeWord('winter');

    // console.assert
    console.assert(
        result === "inter-way",
        JSON.stringify({
            test: "encodeWord('winter')",
            expected: "inter-way",
            result: result,
        })
    );
    
    //2nd TEST: "aniaml" becomes "animal-yay"
    // Variable
    result = encodeWord('animal');

    // console.assert
    console.assert(
        result === "animal-yay",
        JSON.stringify({
            test: "encodeWord('animal-yay')",
            expected: "animal-yay",
            result: result,
        })
    );
 };
 testEncodeWord();

 // TEST- Text
 function testEncodeText() {
    //1st TEST: "how are you?" becomes "ow-hay are-yay ou-yay"
    // Variable
    let result = encodeText('how are you');

    // console.assert
    console.assert(
        result === "ow-hay are-yay ou-yay",
        JSON.stringify({
            test: "encodeText('how are you')",
            expected: "ow-hay are-yay ou-yay",
            result: result,
        })
    );

    //2nd TEST: "i am good thank you." becomes "i-yay am-yay ood-gay ank-thay ou-yay"
    // Variable
    result = encodeText('i am good thank you');

    // console.assert
    console.assert(
        result === "i-yay am-yay ood-gay ank-thay ou-yay",
        JSON.stringify({
            test: "encodeText('i am good thank you')",
            expected: "i-yay am-yay ood-gay ank-thay ou-yay",
            result: result,
        })
    );
 };
 testEncodeText();

