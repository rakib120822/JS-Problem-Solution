let str = "hello world";

let arr = str.split(" ");


for(let i=0; i<arr.length; i++){
    let word = arr[i];
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1);
    arr[i] = firstLetter + restOfWord;
}

str = arr.join(" ");
console.log(str);

