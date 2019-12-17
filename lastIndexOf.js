function lastIndexOf(myArray, value) {
  let correctIndex;
  let found = false;
  for(let index = 0; index < myArray.length; index++) {
    if(myArray[index] === value) {
      correctIndex = index;
      found = true;
    }     
  }
  if(found === true) {
    return correctIndex;  
  } else{
    return -1;
  }
}

console.log(lastIndexOf([0, 2, 4, 2, 6, 8, 2], 2));