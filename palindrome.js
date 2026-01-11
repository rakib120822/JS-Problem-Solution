let str = "madam";

let i = 0;
let j = str.length - 1;
let isPalindrome = true;

while (i < j) {
  if (str[i] !== str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

console.log(isPalindrome);
