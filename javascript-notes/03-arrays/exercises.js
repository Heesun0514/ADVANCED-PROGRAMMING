
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
const