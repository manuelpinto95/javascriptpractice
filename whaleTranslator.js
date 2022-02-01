// We haven't went through iterators and so on, so let's do this in a simple way
// Output whale language. Whales only speak vowels and double their E and U

let input = 'turpentine and turtles';
let vowels = ['A', 'E', 'I', 'O', 'U'];
let resultArray = [];

input = input.toLowerCase();
for (let i = 0; i < input.length; i++) {
  //if (input[i].includes(vowels))
  //  resultArray.push(input[i]);
  // console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    if (input.charAt(i) === vowels[j].toLowerCase()) {
      if (input.charAt(i) === 'e') {
        resultArray.push(vowels[j]);
        resultArray.push(vowels[j]);
      }
      else if (input.charAt(i) === 'u') {
        resultArray.push(vowels[j]);
        resultArray.push(vowels[j]);
      }
      else {
        resultArray.push(vowels[j]);
      }
    }
  }
}

console.log(resultArray.join(''));
