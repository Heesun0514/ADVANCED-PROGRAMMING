## 📌 오늘 배운 핵심 개념

### 1. Event란?
- 프로그램 실행과 **비동기적(asynchronous)** 으로 발생하는 것
- 키보드 입력, 마우스 클릭, 타이머 완료 등
- 이벤트 발생 → 이벤트 큐에 저장 → 콜백 함수 실행

### 2. 이벤트 핸들러 등록 방법 (2가지)

#### 방법 1: HTML 이벤트 핸들러 (간단한 경우)

```html
<!-- 인라인 방식 -->
<button onclick="alert('Clicked!')">Click me</button>

<!-- 함수 참조 방식 -->
<button onclick="handleClick()">Click me</button>
<script>
function handleClick() {
    console.log('Button clicked!');
}
</script>
```

#### 방법 2: scripted 이벤트 핸들러 (권장)

```javascript
const button = document.querySelector('#myButton');

// addEventListener 방식 (권장!)
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// 화살표 함수로 더 간결하게
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// 여러 이벤트 추가 가능
button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'blue';
});

```

### 3.이벤트 루프 (Event Loop)

[이벤트 발생] → [이벤트 큐] → [콜 스택이 비면] → [콜백 실행]

- 브라우저 내부는 단일 스레드에서 이벤트 루프로 동작
- 한 번에 하나의 작업만 처리 (to-completion)
- 이벤트 핸들러는 짧게 작성해야 UI 반응성 유지


```javascript
// ❌ 나쁜 예: 이벤트 핸들러가 오래 걸림
button.addEventListener('click', () => {
    const start = Date.now();
    while(Date.now() - start < 5000) {
        // 5초 동안 아무것도 안 함 (UI 멈춤)
    }
    console.log('Done');
});

// ✅ 좋은 예: 짧게 처리
button.addEventListener('click', () => {
    console.log('Clicked!');
});
```


### 4.Animations

```javascript
// setInterval로 애니메이션 만들기
let position = 0;
const box = document.querySelector('#box');

setInterval(() => {
    position += 5;
    box.style.left = position + 'px';
}, 1000 / 60);  // 60fps

// requestAnimationFrame (더 좋은 방법)
function animate() {
    position += 5;
    box.style.left = position + 'px';
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```