for (let index = 0; index < englishWordsForNumbers.length; index++) {
console.log(englishWordsForNumbers[index], index);
}

if (placeValue % 1000 === 0 && numberToConvert > 999) {
  const num = numberToConvert % 1000;
  numberToConvert = Math.floor(numberToConvert % 1000);
  numberToConvert *= 10000;
  numberToConvert += num;
}
