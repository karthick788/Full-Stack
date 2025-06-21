let fruits = ["Apple","Orange","Banana","Mango","Pineapple"];

console.log(fruits[2]); // Task1

fruits.push("Grapes"); // Task2

fruits.shift(); 
console.log(fruits); //Task3

console.log(fruits.length); // Task4

fruits.forEach(num => console.log(num)); // Task5

fruits.reverse();
console.log(fruits); // Task6

let numbers = [1,2,3,4,5];
let sum  = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum); // Task7

