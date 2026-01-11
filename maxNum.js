let arr = [5, 1, 9, 3];

let maxNum = -1232;
for (let i = 0; i < arr.length; i++) {
  if (maxNum < arr[i]) {
    maxNum = arr[i];
  }
}

console.log(maxNum);
