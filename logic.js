const groupingArrays = (array) => {
  const anagrams = {};
  const result = [];
  for (const word of array) {
    const sortedWord = word.split("").sort();
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  for (const key in anagrams) {
    result.push(anagrams[key]);
  }
  return result;
};

const array = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupingArrays(array));
