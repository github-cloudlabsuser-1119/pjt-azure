function calculateNumbers(var1, var2) {
  return var1 + var2;
}

function reverseSentence(sentence) {
  // Convert the sentence to an array of words
  let words = sentence.split(" ");

  // Reverse the order of the words
  let reversedWords = words.reverse();

  // Capitalize the first letter of the first word
  reversedWords[0] = reversedWords[0].charAt(0).toUpperCase() + reversedWords[0].slice(1);

  // Join the words back into a sentence
  let reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

