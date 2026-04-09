
# 🌐 Network Programming (네트워크 프로그래밍)

웹 애플리케이션에서 서버와 통신하는 핵심 개념들을 정리합니다.

---
## 📌 오늘 배운 핵심 개념
## 📌 1. 암시적 vs 명시적 네트워킹

| 종류 | 설명 | 예시 |
|------|------|------|
| **암시적 (Implicit)** | 브라우저가 자동으로 수행 | `<img src="...">`, `<script src="...">`, form 제출 |
| **명시적 (Explicit)** | JS 코드로 직접 요청 | `fetch()`, `XMLHttpRequest` |

---

### 🔁 2. AJAX

> Asynchronous JavaScript and XML

- 비동기적으로 서버와 통신
- 페이지 새로고침 없이 데이터 교환
- 콜백 함수로 응답 처리

---

### 🏚️ 3. XMLHttpRequest (구식 방식)

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
```

### 4.  fetch() API (현대 방식 - 추천)
#### GET 요청

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```


#### POST 요청

``` javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Jane',
        age: 30
    })
})
.then(response => response.json())
.then(data => console.log(data));
```



### 🧵 5. async/await 방식 (더 간결)

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```


### 🔒 6. Same-Origin Policy (SOP) - 동일 출처 정책

보안 정책: 스크립트가 로드된 출처(Origin)와 다른 출처의 리소스 접근 제한

- 보안 정책: 다른 출처(도메인, 프로토콜, 포트)의 리소스 접근 제한
- 같은 출처: https://example.com/page1 → https://example.com/page2 ✅
- 다른 출처: https://example.com → http://api.example.com ❌


### 🌍 7. CORS (Cross-Origin Resource Sharing)

- SOP의 예외를 허용하는 메커니즘
- 서버가 Access-Control-Allow-Origin 헤더로 허용할 출처 지정

#### 서버 응답 헤더 예시

// 서버 응답 헤더 예시
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type


# ✅ Tip: 현업에서는 fetch() + async/await 조합을 가장 많이 사용합니다. CORS 에러는 프론트엔드 개발 시 자주 마주치는 문제이므로 반드시 이해해야 한다