export function findLengthOfLongestWord(words) {
  var longestWord;
  var longestWordLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWord = words[i];
      longestWordLength = words[i].length;
    }
  }
  return {
    word: longestWord,
    length: longestWordLength,
  };
};

export function findAvgLengthOfWords(words) {
  var totalLetters = 0;
  for (var i = 0; i < words.length; i++) {
    totalLetters += words[i].length
  }
  var avgLength = Math.round(totalLetters / words.length);
  return avgLength;
};
