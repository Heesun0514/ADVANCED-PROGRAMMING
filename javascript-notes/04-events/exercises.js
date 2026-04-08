// Exercise 1: Click Event

// Write code that prints "Hello, World!" to the console when a button is clicked

// HTML: <button id="helloBtn">Click me</button>

// Selecting the Button with JavaScript
const button =document.querySelector('#helloBtn');
        //HTML에서 id="helloBtn"인 버튼 요소를 찾음


button.addEventListener('click',()=>{
        //그 버튼에 "클릭 이벤트" 기능을 추가함

    console.log('Hello,World');
        //클릭했을 때 실행될 함수 (화살표 함수) 
});




// Exercise 2: Mouse Over Event
// Make a div's background color turn yellow when the mouse hovers over it, 
// and return to gray when the mouse leaves.

// HTML: <div id="box" style="width:200px;height:200px;background:gray;"></div>


const box=document.querySelector('#box');

box.addEventListener('mouseenter',()=>{
    box.style.backgroundColor='yellow';
});

box.addEventListener('mouseleave',()=>{
    box.style.backgroundColor='gray';
});


// Exercise 3: Keyboard Event
//Write code that displays the user's input in real-time on the screen.
// HTML: <input type="text" id="input"> <p id="display"></p>



const input=document.querySelector('#input');
const display=document.querySelector('#display');

input.addEventListener('input',(event)=>{
    //(event) => { ... } : 이벤트가 발생하면 실행될 함수 (화살표 함수)


    display.textContent=event.target.value;
                        //event.target 은 무엇인가?
                             //event 객체 안에는 target이라는 속성이 있음
                             //event.target은 이벤트가 발생한 바로 그 요소를 가리킴
                             //여기서는 이벤트가 발생한 요소 = input 박스


                        //event.target.value 는 무엇인가?
                              //value는 input 박스에 현재 입력되어 있는 텍스트 전체를 의미
                              //사용자가 "Hello"를 입력했다면 event.target.value = "Hello"

                        //display.textContent 는 무엇인가?    
                             // textContent는 해당 요소(p 태그)의 텍스트 내용을 의미
                             // display.textContent = "Hello" 라고 하면, <p>Hello</p> 가 됨
});



// Exercise 4:Prevent Default Event Behavior 이벤트 기본 동작 막기

//Prevent a link from navigating to its destination when clicked. 링크를 클릭해도 페이지가 이동하지 않도록 막고
//Instead, print "Navigation blocked" to the console. 대신 "이동이 차단되었습니다"를 콘솔에 출력하세요.
// HTML: <a href="https://google.com" id="blockLink">Google</a>



const link=document.querySelector('#blockLink');
link.addEventListener('click',(event)=>{
    event.preventDefault(); // 기본 동작(페이지 이동) 막기
    console.log('Navigation blocked');
});



