
// Exercise 1: Basic Array Methods
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Add 'mango' to the end of the array

fruits.push('mango'); // 1. adds 'mango' at the end

// Remove the first element from the array

fruits.shift(); // 2. removes 'apple' from the beginning

// Print the length of the array
console.log(fruits.legnth) // 3. prints the length


//Exercise 2: map() and filter()
// From the numbers array,
// create a new array where odd numbers are doubled and even numbers remain the same.

const numbers=[1,2,3,4,5,6,7,8,9,10];

const result=numbers.map(n=>n%2===1 ? n*2:n);


//ternary operator 

//n % 2 === 1	Condition: Is the number odd?
//n * 2	If TRUE (odd): double the number
// n	If FALSE (even): keep the number as is



console.log(result);



// Exercise 3: Statistics with reduce()

// From the students' scores array, calculate the average, maximum, and minimum scores.

const scores = [85, 92, 78, 90, 88, 76, 95, 89];

const sum=scores.reduce((acc,curr)=>acc+curr,0);
const avg=sum/scores.length;
const max=scores.reduce((a,b)=>a>b?a:b)

//If a is greater than b → keep a
//If b is greater than a → keep b

const min=scores.reduce((a,b)=>a<b?a:b);

console.log(`Average: ${avg}, Max: ${max}, Min: ${min}`);



// Exercise 4: Method Chaining
/*
Process the following tasks in a single chain:

Create an array of numbers from 1 to 20
Filter numbers greater than 10
Multiply each remaining number by 3
Calculate the sum of all numbers

*/


const result1=Array.from({length:20},(_,i)=>i+1) // (_,i) :Parameter is NOT needed
        .filter(n=>n>10)
        .map(n=>n*3)
        .reduce((sum,n)=>sum+n,0);

console.log(result1);


//Exercise 5: Working with an Array of Objects

//From the users array below, 
// find all users who are 30 years or older 
// AND whose name starts with 'Kim' (or any specific letter, e.g., 'K').


const users = [
    { name: 'Kim Chulsoo', age: 25, city: 'Seoul' },
    { name: 'Lee Younghee', age: 32, city: 'Busan' },
    { name: 'Kim Minsoo', age: 35, city: 'Incheon' },
    { name: 'Park Jisung', age: 28, city: 'Seoul' },
    { name: 'Kim Yoohna', age: 31, city: 'Daejeon' }
];


const result2=users.filter(user=>user.age>=30 && user.name.startsWith('Kim'));
console.log(result2)
