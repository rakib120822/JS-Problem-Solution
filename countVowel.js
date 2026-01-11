let str = 'programming';

let count = 0;
let allVowels = 'aeiouAEIOU';
for(let i = 0; i < str.length; i++) {
    if(allVowels.includes(str[i])) {
        count++;
    }   
}

console.log(count);        