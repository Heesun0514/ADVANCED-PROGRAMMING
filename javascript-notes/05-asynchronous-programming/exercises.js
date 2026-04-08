// Exercise 1 Sync vs Async Understanding
// Predict the output order of the code below:


console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');


// 1->3->2
// Even setTimeout(..., 0) is handled asynchronously. 
// All synchronous code runs first, 
// then the callback in the event queue executes.




// Exercise 2 Create a Callback Function
// Write a function that takes a number 
// and, after 1 second, passes its double to a callback.
//숫자를 받아서 1초 후에 그 숫자의 2배를 콜백으로 전달하는 함수를 작성하세요



function doubleAfterOneSecond(num,callback){
                            // num 입력값, callback 매개변수
    setTimeout(()=>{
        const result3=num*3;
        callback(result3);
    },1000);
}



doubleAfterOneSecond(5,(result3)=>{
    console.log(result3);
}) // Outputs 10 after 1 second



// Exercise 3 Experience Callback Hell
// Write code using callbacks to print 
// "A", "B", "C" in sequence with a 1-second gap between each.

setTimeout(()=>{
    console.log('A');
    setTimeout(()=>{
        console.log('B');
        setTimeout(()=>{
            console.log('C');
        },1000)
    },1000)
},1000);