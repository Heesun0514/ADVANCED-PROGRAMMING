# JavaScript 기초 - 2026-04-07

## 📌 오늘 배운 핵심 개념

### 1. JavaScript란?
- 동적 타입(dynamically-typed), 인터프리터 언어
- 브라우저와 서버(Node.js)에서 실행됨
- C-like 문법 but 함수형 프로그래밍 특징

### 2. Primitive Types (원시 타입)

| 타입 | 설명 | 예시 |
|------|------|------|
| Boolean | true/false | `let isDone = true;` |
| Null | 의도적으로 비어있음 | `let value = null;` |
| Undefined | 선언만 하고 할당 안 함 | `let x; // undefined` |
| String | 문자열 | `let name = "Jane";` |
| Number | 숫자 (내부적으로는 float) | `let age = 30;` |
| Symbol | 고유한 값 (ES6) | `const sym = Symbol('id');` |

### 3. 변수 선언 (let vs const vs var)

```javascript
// ✅ let: 재할당이 필요한 경우 (블록 스코프)
let count = 0;
count = 1;  // OK

// ✅ const: 기본값! 재할당 필요 없을 때
const name = "Jane";
// name = "John";  // ❌ TypeError

// ❌ var: 쓰지 말자 (함수 스코프, 호이스팅 문제)
var old = "don't use";
📝 규칙: 기본은 const, 재할당 필요하면 let, var는 절대 사용 금지!
```

### 4.🔄 타입 변환 (Type Conversion)

#### 명시적 형변환 (Explicit Conversion)

```javascript
// String() - 문자열로 변환
console.log(String(3));        // "3"
console.log(String(true));     // "true"
console.log(String(null));     // "null"
console.log(String(undefined));// "undefined"

// Number() - 숫자로 변환
console.log(Number("1234"));           // 1234
console.log(Number("1234adf"));        // NaN (문자가 포함되면)
console.log(Number(true));             // 1
console.log(Number(false));            // 0
console.log(Number(null));             // 0
console.log(Number(undefined));        // NaN

// Boolean() - 불리언으로 변환
// false가 되는 경우: 숫자 0, 빈 문자열 "", null, undefined, NaN
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));     // false

// true가 되는 경우
console.log(Boolean("0"));     // true  (문자열 "0")
console.log(Boolean(" "));     // true  (공백 문자열)
⚠️ 주의: prompt 입력 시 주의사항


// ❌ 문제 상황
const mathScore = prompt('what is score of math?');  // "70"
const engScore = prompt('what is score of eng?');    // "80"
const result = (mathScore + engScore) / 2;           // "7080" / 2 = 3540

// 왜? prompt 입력값은 문자열!
// "70" + "80" = "7080" (문자열 연결)
// 나누기(/)가 있으면 자동으로 숫자 변환되지만, 의도치 않은 결과 발생 가능

// ✅ 해결책: 명시적 형변환
const mathScore2 = Number(prompt('what is score of math?'));
const engScore2 = Number(prompt('what is score of eng?'));
const result2 = (mathScore2 + engScore2) / 2;  // 75

```

### 5.➕ 연산자 (Operators)

#### 증가/감소 연산자

```javascript

let num = 10;
let result1 = num++;   // 10 (증가시키기 전 값 반환)
let result2 = ++num;   // 12 (증가시킨 후 값 반환)

console.log(result1);  // 10
console.log(result2);  // 12
```

#### 동등/일치 연산자

```javascript
const a = 1;
const b = '1';

// == 동등 연산자 (값만 비교, 타입은 무시) - ❌ 비추천
console.log(a == b);   // true

// === 일치 연산자 (값과 타입 모두 비교) - ✅ 추천
console.log(a === b);  // false
```



### 6.🔀 조건문 (Conditional Statements)

#### if, else if, else

```javascript
const age = 19;

if (age > 19) {
    console.log('환영합니다');
} else if (age === 19) {
    console.log('수능 잘 치세요');
} else {
    console.log('안녕히 가세요');
}
// 출력: 수능 잘 치세요

```


#### 논리 연산자 (Logical Operators)

| 연산자 | 의미 | 특징 |
|--------|------|------|
| OR (\|\|) | 논리합 | 첫 번째 true를 발견하면 즉시 평가 멈춤 |
| AND (&&) | 논리곱 | 첫 번째 false를 발견하면 즉시 평가 멈춤 |
| NOT (!) | 부정 | 값을 반전 (true → false, false → true) |

```javascript
// NOT 연산자 활용
// const age1 = prompt('나이를 입력하세요');
// const isAdult = age1 > 19;
// if (!isAdult) {
//     console.log('go back');
// }
```


#### ⚠️ 연산자 우선순위 주의

```javascript
const gender = 'F';
const name = 'Jane';
const isAdult1 = 'true';

// AND(&&)가 OR(||)보다 우선순위가 높음
// 아래 두 코드는 다르게 동작함!

// Case 1: (gender === 'M' && name === 'Mike') || isAdult1
if (gender === 'M' && name === 'Mike' || isAdult1) {
    console.log('pass');   // 실행됨 (isAdult1이 true이므로)
} else {
    console.log('denied');
}

// Case 2: gender === 'M' && (name === 'Mike' || isAdult1)
if (gender === 'M' && (name === 'Mike' || isAdult1)) {
    console.log('pass');
} else {
    console.log('denied');  // 실행됨
}

```

### 7. 🔁 반복문 (Loops)

#### for 반복문

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}
```

#### while 반복문

```javascript
let e = 0;
while (e < 10) {
    console.log(e);
    e++;
}
```

#### do...while 반복문

```javascript
let f = 0;
do {
    f++;
} while (f < 10);
```

#### break와 continue

```javascript
let f = 0;
// break: 반복문 종료
while (true) {
    let answer = confirm('continue?');
    if (!answer) {
        break;
    }
}

// continue: 현재 반복 건너뛰고 다음으로
for (let g = 0; g < 10; g++) {
    if (g % 2) {  // 홀수일 때 (나머지가 1이면 true)
        continue;  // 홀수는 건너뜀
    }
    console.log(g);  // 0, 2, 4, 6, 8
}

```


#### for...of 반복문 (배열 전용 - 인덱스 없음)

```javascript
let days = ['mon', 'tue', 'wed'];
for (let day of days) {
    console.log(day);  // mon, tue, wed
}
```

### 8. 🔀 switch 문

```javascript
let fruit = prompt('무슨 과일을 사고 싶나요?');

switch (fruit) {
    case '사과':
        console.log('100원');
        break;
    case '바나나':
        console.log('200원');
        break;
    case '멜론':
    case '수박':      // 멜론과 수박 같은 처리
        console.log('500원');
        break;
    default:
        console.log('그런 과일은 없습니다');
}

```



### 9. 📦 함수 (Function)

함수 선언 vs 함수 표현식

|구분	|함수 선언문	|함수 표현식
|------|------|------|
|호이스팅|	✅ 가능 (어디서든 호출 가능) |	❌ 불가능 (선언 후에만 호출 가능)|
|문법|	function name() {}	| const name = function() {}|
|사용 시점|	선언 전에도 호출 가능|	선언 후에만 호출 가능|

```javascript
// 함수 선언문 - 호이스팅 O
sayHello();  // 호출 가능!

function sayHello() {
    console.log('Hello');
}

// 함수 표현식 - 호이스팅 X
// showError();  // ❌ 에러! (선언 전 호출 불가)
let showError = function() {
    console.log('error');
};

```

#### 함수 기본 문법

```javascript
// 기본 함수
function showError() {
    alert('에러가 발생했습니다');
}
showError();

// 매개변수가 있는 함수
function sayHello(name) {
    let msg = 'Hello';
    if (name) {
        msg += ', ' + name;
    }
    console.log(msg);
}
sayHello();        // Hello
sayHello('Mike');  // Hello, Mike

// 기본값 매개변수 (Default Parameter)
function sayHello(name = 'friend') {
    let msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello();        // Hello, friend
sayHello('Jane');  // Hello, Jane
```

#### return 문



```javascript
// 값 반환
function add(num1, num2) {
    return num1 + num2;
}
const result = add(2, 3);
console.log(result);  // 5

// return 문이 없으면 undefined 반환
function showError() {
    alert('Error');
    // return이 없음 → undefined 반환
}
const result2 = showError();
console.log(result2);  // undefined

// 함수 종료 목적으로도 사용
function showError() {
    alert('Error');
    return;  // 여기서 함수 종료
    alert('이 코드는 절대 실행되지 않습니다');
}
```

#### 함수 네이밍 컨벤션

|함수명	|의미|
|------|------|
|showError	|에러를 보여줌
getName	|이름을 얻어옴
|createUserData	|유저데이터 생성
|checkLogin	|로그인 여부 체크

💡 Tip: 함수는 한 번에 한 작업에 집중하고, 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍하기

### 10.🎯 객체 (Object)

#### 객체 생성 및 접근

```javascript
// 리터럴 생성 방식
const superman = {
    name: 'clark',
    age: 30
};

// 접근 방법
console.log(superman.name);     // clark
console.log(superman['age']);   // 30
console.log(superman);          // {name: 'clark', age: 30}
```

#### 프로퍼티 추가, 수정, 삭제

```javascript
const superman = { name: 'clark', age: 30 };

// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

// 수정
superman.age = 33;

// 삭제
delete superman.hairColor;
console.log(superman);  // {name: 'clark', age: 33, gender: 'male'}
```

#### 단축 프로퍼티 (Shorthand Property)

```javascript
const name = 'clark';
const age = 33;

const superman = {
    name,      // name: name 과 동일
    age,       // age: age 와 동일
    gender: 'male'
};

// 함수에서 활용
function makeObject(name, age) {
    return {
        name,           // name: name
        age,            // age: age
        hobby: 'football'
    };
}
const mike = makeObject('Mike', 30);
console.log(mike);  // {name: 'Mike', age: 30, hobby: 'football'}
```

#### 프로퍼티 존재 여부 확인 (in 연산자)

```javascript
const superman = { name: 'clark', age: 33 };

console.log(superman.birthDay);     // undefined
console.log('birthDay' in superman); // false
console.log('age' in superman);      // true

// 활용 예시: 안전한 조건 검사
function isAdult(user) {
    if (!('age' in user) || user.age < 20) {
        return false;
    }
    return true;
}

const mike = { name: 'Mike', age: 30 };
const jane = { name: 'Jane' };

console.log(isAdult(mike));  // true
console.log(isAdult(jane));  // false (age 속성 없음)
```

#### for...in 반복문 (객체 순회)

```javascript
const superman = { name: 'clark', age: 33 };

for (let key in superman) {
    console.log(key);              // name, age
    console.log(superman[key]);   // clark, 33
}
```

### 11.🎯 객체 - 메서드와 this

#### 메서드 정의

```javascript
const superman = {
    name: 'clark',
    age: 33,
    // 메서드 정의
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

superman.sayHello();  // Hello, I'm clark
```

#### this의 중요성

```javascript
// ❌ 잘못된 예: 객체명을 직접 사용
let boy = {
    name: "Mike",
    showName: function() {
        console.log(boy.name);  // boy 대신 this를 써야 함
    }
};

let man = boy;
boy = null;
man.showName();  // ❌ 에러! (boy가 null이 되었기 때문)

// ✅ 올바른 예: this 사용
let boy2 = {
    name: "Mike",
    showName: function() {
        console.log(this.name);  // this는 현재 객체를 가리킴
    }
};

let man2 = boy2;
boy2 = null;
man2.showName();  // Mike (정상 동작)
```

#### 화살표 함수와 this 주의사항

``` javascript
// ⚠️ 화살표 함수는 자신만의 this를 가지지 않음
// 외부 스코프의 this를 가져옴

let boy = {
    name: 'Mike',
    // 일반 함수: this = boy 객체
    sayHello: function() {
        console.log(this.name);  // Mike
    },
    // 화살표 함수: this = 전역 객체 (window 또는 global)
    sayHi: () => {
        console.log(this);  // window (브라우저) 또는 global (Node.js)
    }
};

boy.sayHello();  // Mike
boy.sayHi();     // window (전역 객체)
💡 Tip: 객체의 메서드에서는 일반 함수를 사용하고, 화살표 함수는 this 바인딩이 필요 없는 곳에서 사용하세요.
```

### 12.📚 배열 (Array)

#### 배열 생성 및 접근

```javascript
// 배열 생성
let students = ['철수', '영희', '영수'];
let days = ['mon', 'tue', 'wed'];

// 인덱스 접근
console.log(students[0]);  // 철수
console.log(students[1]);  // 영희

// 요소 수정
students[0] = '민정';
console.log(students);  // ['민정', '영희', '영수']

// 배열 길이
console.log(days.length);  // 3
```

#### 다양한 타입을 담는 배열

``` javascript
let arr = [
    '민수',           // 문자열
    3,               // 숫자
    false,           // 불리언
    { name: 'Mike', age: 30 },  // 객체
    function() { console.log('TEST'); }  // 함수
];
```

#### 배열 조작 메서드

|메서드	|설명	|원본 변경
|------|------|------|
|push()	|배열 끝에 추가	|✅
|pop()	|배열 끝 요소 제거	|✅
|unshift()	|배열 앞에 추가|	✅
|shift()	|배열 앞 요소 제거|	✅

```javascript
let days = ['mon', 'tue', 'wed'];

// push: 끝에 추가
days.push('thu');
console.log(days);  // ['mon', 'tue', 'wed', 'thu']

// pop: 끝에 제거
days.pop();
console.log(days);  // ['mon', 'tue', 'wed']

// unshift: 앞에 추가
days.unshift('sun');
console.log(days);  // ['sun', 'mon', 'tue', 'wed']

// shift: 앞에 제거
days.shift();
console.log(days);  // ['mon', 'tue', 'wed']
```

#### 배열 순회

```javascript
let days = ['mon', 'tue', 'wed'];
days.push('thu');
days.unshift('sun');

// for 반복문 (인덱스 필요 시)
for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}
// sun, mon, tue, wed, thu

// for...of 반복문 (값만 필요 시) - ✅ 권장
for (let day of days) {
    console.log(day);
}
// sun, mon, tue, wed, thu
```