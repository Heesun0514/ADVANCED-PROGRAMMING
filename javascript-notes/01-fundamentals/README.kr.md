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
```


### 4. function 

```javascript
// 1. 변수/상수에 할당 가능
const sayHello = function(name) {
    return `Hello, ${name}!`;
};

// 2. 함수의 인자로 전달 가능
[1, 2, 3].forEach(function(n) {
    console.log(n);
});

// 3. 함수의 반환값으로 사용 가능 (클로저)
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

```

### 5. object 

```javascript
// 리터럴 생성 방식 (가장 흔함)
const person = {
    name: "Jane",
    age: 30,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

// 접근 방법
console.log(person.name);     // Jane
console.log(person["age"]);   // 30

```

