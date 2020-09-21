"use strict";

let number = [1, 7, 10, 9, 55];

let arrLen = number.length;

// console.log(arrLen);

let counter = 0;

for (i = 0; i < arrLen; i++) {
  if (number[i] >= counter) {
    counter = number[i];
  }
}

console.log(counter);
