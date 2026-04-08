# Asynchronous Programming - 비동기 프로그래밍

> 📅 학습일: 2026년 4월 8일  
> 🎯 목표: 동기/비동기 차이 이해, 콜백 함수 패턴 익히기

## 📌 오늘 배운 핵심 개념

### 1. 동기(Synchronous) vs 비동기(Asynchronous)

| | 동기(Sync) | 비동기(Async) |
|--|------------|---------------|
| **동작 방식** | 요청 후 결과가 올 때까지 **대기** | 요청 후 즉시 **다음 작업 실행** |
| **블로킹** | 블로킹 발생 | 논블로킹 |
| **UI 반응성** | 나쁨 (멈춤) | 좋음 |
| **예시** | `readFileSync()` | `fetch()`, `setTimeout()` |
[동기 방식]
요청 → [대기] → 응답 → 다음 코드 실행

[비동기 방식]
요청 → 다음 코드 실행 (계속)
↓
(나중에) 응답 → 콜백 실행

text

### 2. 콜백 함수 (Callback Function)

**정의:** 나중에 실행될 함수를 인자로 전달하는 패턴

```javascript
// setTimeout: 1초 후에 콜백 실행
setTimeout(() => {
    console.log('1초 후 실행');
}, 1000);

console.log('먼저 실행');  // 위보다 먼저 실행됨

// 출력 순서:
// '먼저 실행'
// '1초 후 실행'
3. 왜 비동기가 필요한가?

javascript
// ❌ 동기 방식으로 네트워크 요청 (실제로는 불가능 - 예시)
function fetchDataSync() {
    const data = networkRequest();  // 여기서 2초 대기 (UI 멈춤)
    console.log(data);
    console.log('이것도 나중에 실행됨');
}
fetchDataSync();
console.log('이것도 나중에?');  // UI 전체가 멈춤

// ✅ 비동기 방식 (현실)
function fetchDataAsync() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data));
    console.log('요청 보내고 바로 실행됨!');
}
fetchDataAsync();
console.log('UI는 계속 반응함');
4. 콜백 사용 예시

javascript
// 1. setTimeout / setInterval
setTimeout(() => console.log('딜레이'), 1000);
setInterval(() => console.log('1초마다'), 1000);

// 2. 이벤트 리스너
button.addEventListener('click', () => {
    console.log('클릭됨');  // 콜백
});

// 3. 배열 메서드
[1, 2, 3].forEach((n) => {
    console.log(n);  // 콜백
});

// 4. 파일 읽기 (Node.js)
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
5. 콜백 지옥 (Callback Hell)

비동기 작업이 중첩될 때 발생하는 문제:

javascript
// ❌ 콜백 지옥 예시
setTimeout(() => {
    console.log('1번 완료');
    setTimeout(() => {
        console.log('2번 완료');
        setTimeout(() => {
            console.log('3번 완료');
            setTimeout(() => {
                console.log('4번 완료');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
문제점:

가독성 매우 나쁨
디버깅 어려움
에러 처리 복잡
유지보수 불가능
6. 비동기 패턴의 필요성

javascript
// 여러 비동기 작업을 동시에 실행하고 싶을 때
// 콜백만으로는 구현이 매우 어려움

// 예: 3개의 이미지를 동시에 로드하고, 모두 완료되면 "완료" 출력
// 콜백으로는? 매우 복잡...
// → 이 문제를 해결하기 위해 Promise 등장!