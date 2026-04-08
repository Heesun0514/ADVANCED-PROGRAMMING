# Arrays (배열)

## 📌 오늘 배운 핵심 개념

### 1. 배열 생성 방법

```javascript
// 리터럴 방식 (가장 많이 씀)
const arr1 = [1, 2, 3, 4, 5];

// 생성자 방식
const arr2 = new Array(5);  // 길이가 5인 빈 배열

// Array.from() - iterable로부터 생성
const arr3 = Array.from('hello');  // ['h','e','l','l','o']
const arr4 = Array.from([1, 2, 3], x => x * 2);  // [2,4,6]

// Array.of() - 여러 값을 배열로
const arr5 = Array.of(1, 2, 3);  // [1,2,3]
```

### 2. 배열 순회 (Traversal)

```javascript
const arr = [1, 2, 3, 4, 5];

// 1. for문 (전통적)
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. for...of (값만 필요할 때)
for(const value of arr) {
    console.log(value);
}

// 3. forEach (함수형)
arr.forEach(function(value, index) {
    console.log(`${index}: ${value}`);
});

// 4. 화살표 함수로 더 간결하게
arr.forEach((value, index) => console.log(index, value));
```

### 3. 배열 슬라이싱 (slice) - 원본 불변

```javascript
const arr = [1, 2, 3, 4, 5];

// slice(start, end) - end는 미포함
const firstThree = arr.slice(0, 3);   // [1, 2, 3]
const lastTwo = arr.slice(3);          // [4, 5]
const copy = arr.slice();              // [1,2,3,4,5] (얕은 복사)

// 음수 인덱스 지원
const last = arr.slice(-1);            // [5]
```

### 4. 요소 추가/제거/교체 (splice) - 원본 변경

```javascript
const arr = [1, 2, 3, 4, 5];

// 추가: splice(위치, 0, 추가할값)
arr.splice(2, 0, 99);     // [1,2,99,3,4,5]

// 제거: splice(위치, 개수)
const removed = arr.splice(2, 1);      // removed = [99], arr = [1,2,3,4,5]

// 교체: splice(위치, 개수, 새값)
arr.splice(1, 2, 100, 200);            // [1,100,200,4,5]

// 끝에 추가 (push와 동일)
arr.splice(arr.length, 0, 6);          // [1,100,200,4,5,6]
```

### 5. 함수형 메서드 (Functional Programming)

#### map() - 변환

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);     // [2,4,6,8,10]
const strings = numbers.map(n => `숫자: ${n}`); // ['숫자: 1', ...]
```

#### filter() - 필터링

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);  // [2,4,6]
const big = numbers.filter(n => n > 3);           // [4,5,6]
```

#### reduce() - 누적

##### The Parameters



```javascript
const numbers = [1, 2, 3, 4, 5];

// 합계
const sum = numbers.reduce((acc, curr) => acc + curr, 0);  // 15
```
|parameter	|Name	|Meaning
|------------|-----|--------|
|acc	|Accumulator	|The running total (carries over each step)
|curr	|Current	|The current element being processed
|0	|Initial Value	|Starting value for acc before the first loop



```javascript
// 최댓값
const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);  // 5

// 평균
const avg = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
```
#### forEach() - 실행 (반환값 없음)

```javascript
const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n));  // 각 요소 출력 (반환값 없음)
```

#### every() / some() - 조건 검사

```javascript
const numbers = [2, 4, 6, 8];

// every: 모든 요소가 조건을 만족?
const allEven = numbers.every(n => n % 2 === 0);  // true

// some: 하나라도 조건을 만족?
const hasBig = numbers.some(n => n > 10);         // false
```

#### find() / findIndex() - 검색

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.id === 2);        // { id: 2, name: 'Bob' }
const index = users.findIndex(u => u.name === 'Bob');  // 1
```

### 6. 함수 체이닝 (Chaining)

``` javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 뽑아서 2배하고 합계 구하기
const result = numbers
    .filter(n => n % 2 === 0)     // [2,4,6,8,10]
    .map(n => n * 2)               // [4,8,12,16,20]
    .reduce((sum, n) => sum + n, 0);  // 60

console.log(result);  // 60
```



### 📊 메서드 빠른 참고표

|메서드	|용도	|원본 변경	|반환값
|------|----|-----|----|
|push()	|끝에 추가	|✅	|새 길이
|pop()|	끝에서 제거	|✅	|제거된 요소
|unshift()|	앞에 추가|	✅	|새 길이
|shift()	|앞에서 제거	|✅	|제거된 요소
|slice()	|부분 복사	|❌	|새 배열
|splice()	|추가/제거/교체|	✅	|제거된 요소들
|map()	|변환	|❌	|새 배열
|filter()	|필터링	|❌|	새 배열
|reduce()	|누적	|❌	|누적값
|forEach()	|순회 실행	|❌	|없음 (undefined)
|find()	|요소 검색	|❌	|찾은 요소
|findIndex()|	인덱스 검색	|❌	|인덱스
|every()	|모두 만족?	|❌	|boolean
|some()	|하나라도 만족?	|❌	|boolean