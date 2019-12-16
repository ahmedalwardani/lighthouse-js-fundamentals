const calculateRectangleArea = function(length, width) {
  if(length < 0 || width < 0) {
    return undefined;
  
  } else{
    return length * width;
  }
}

const calculateTriangleArea = function(base, height) {
  if(base < 0 || height < 0) {
    return undefined;

  } else{
    return 0.5 * base * height;
  }
  
}

const calculateCircleArea = function(radius) {
  if(radius < 0) {
    return undefined;

  } else {
    return Math.PI * radius * radius;
  }
}

console.log(calculateCircleArea(1));
console.log(calculateTriangleArea(4,4));
console.log(calculateRectangleArea(2,2));


