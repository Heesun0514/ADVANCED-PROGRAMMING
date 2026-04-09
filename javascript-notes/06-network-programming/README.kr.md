
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

### 4.  fetch() API (현대 방식 - 추천) why? 
> 브라우저에서 fetch() 함수를 지원하기 이 전에는 request나 axios, jQuery와 같은 라이브러리를 사용해서 클라이언트 단에서 직접 HTTP 요청하고 응답을 받는 게 상당히 복잡해서 이러한 라이브러리를 사용. 

요즘에는 **브라우저에서 내장된 fetch() 함수를 이용** 이러한 라이브러리를 사용하는 것이 자바스크립트 번들(bundle) 파일의 크기만 늘려서 낭비가 될 수 있습니다.

#### fetch 사용법 

```javascript
fetch(url,options) 
    //첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환
            // 옵션(options) 객체에는 HTTP 방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 등을 설정
            // 응답(response) 객체로 부터는 HTTP 응답 상태(status), HTTP 응답 헤더(headers), HTTP 응답 전문(body) 등을 읽어 옴 
.then((response)=>console.log("response:",response)) // 성공
.catch((error)=>console.log("error:",error)) // 실패 
```


<>

- fetch는 기본적으로 HTTP *GET* 요청,옵션 인자가 필요 없다 
- 완전히 자유롭게 이름을 바꿀 수 있습니다

```javascript
// ✅ 변수명을 완전히 다르게 지어도 OK
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(x => x.json())
    .then(y => console.log(y.title))

// ✅ 한국어도 가능 (하지만 권장하지 않음)
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(응답 => 응답.json())
    .then(데이터 => console.log(데이터.title))

// ✅ 의미 있는 이름으로 짓는 게 좋음
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())      // res = response
    .then(post => console.log(post.title))  // post = 게시글
```

> 중요한 점:

- 첫 번째 then: 파라미터는 Response 객체를 받음 → 보통 response, res, r 등으로 이름 지음
- 두 번째 then: 파싱된 실제 데이터(JSON 객체)를 받음 → 보통 data, post, user, result 등 의미 있는 이름으로 지음

- 관례적으로 많이 쓰는 이름:

``` javascript
.then(res => res.json())     // response 줄임말
.then(data => ...)           // 일반적인 데이터
.then(post => ...)           // 게시글일 때
.then(user => ...)           // 사용자 정보일 때
```


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
    // method 옵션을 POST로 지정해주고, headers 옵션을 통해 JSON 포맷을 사용한다고 알려줘야 하며, 요청 전문을 JSON 포맷으로 직렬화화여 가장 중요한 body 옵션에 설정
})
.then(response => response.json())
.then(data => console.log(data));
```


> fetch() 함수는 사용법이 아주 간단하지만, 계속 사용하다보면 똑같은 코드가 반복된다는 것 ! 그래서 ---> **async/await 방식**


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


- Access-Control-Allow-Origin: https://myapp.com
- Access-Control-Allow-Methods: GET, POST, PUT
- Access-Control-Allow-Headers: Content-Type


### ✅ Tip: 현업에서는 fetch() + async/await 조합을 가장 많이 사용합니다. CORS 에러는 프론트엔드 개발 시 자주 마주치는 문제이므로 반드시 이해해야 한다