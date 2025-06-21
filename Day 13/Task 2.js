let numbers = [1,2,3,4,5]; 
let numbers1 = [6,7,8]; 
let result = numbers.concat(numbers1);
console.log(`Merged Array : ${result}`); // Task1

let ans = numbers.splice(1,2);
console.log(`Spliced Array : ${ans}`);
console.log(`Unspliced Array : ${numbers}`); // Task2

let n = [5,3,2,9,4,1];
n.sort()
console.log(`Sorted Array : ${n}`); // Task3

let s = [6,7,8,9];
console.log(`Element exists or not : ${s.includes(8)}`); // Task4

let f = [1,2,4,5,7];
let pos = f.indexOf(4);
console.log(`Index of elemnt : ${pos}`); // Task5




