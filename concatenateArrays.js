function concat(array1, array2) {
  let array3 = [];
  if(array1.length !== 0) {
    for(let i = 0; i < array1.length; i++) {
      array3.push(array1[i]);
    }
  }

  if(array2.length !== 0) {
    for(let j = 0; j < array2.length; j++) {
      array3.push(array2[j]);
    }
  }
  return array3;
}

console.log(concat([], []));