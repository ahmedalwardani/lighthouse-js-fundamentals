function reverseString(stringToReverse) {
  let reversedString = "";
  for(let i = stringToReverse.length - 1; i <= 0; i--) {
    reversedString += i;
  }
  return reversedString;
}
console.log(reverseString("Ahmed"));