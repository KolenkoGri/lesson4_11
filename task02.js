'use strict';
const recursion = (arr = []) => {
  const number = Math.round(Math.random() * 10);
  arr.push(number);
  const subtotal = arr.reduce((sum, current) => sum + current, 0);
  if (subtotal < 50) {
    console.log('Промежуточная сумма:', subtotal);
    recursion(arr);
  } else {
    return console.log(arr);
  }
};

recursion();
