# DOM API (Document Object Model)

## 📌 오늘 배운 핵심 개념

### 1.  DOM이란??
- 브라우저가 페이지 내용을 트리 구조로 표현한 것
- HTML 요소들의 계층적 관계를 나타냄
- Javascript로 DOM을 읽고/쓰고/수정할 수 있음

### 2. document 객체

- DOM 접근의 최상위 진입점
- 전역 객체(global)로 어디서든 사용 가능


```javascript

console.log(document);  // 전체 DOM 출력
console.log(document.title);  // 페이지 제목

```

### 3. DOM 접근자 (Accessors)

| 메서드                          | 설명           | 반환값          |
|-------------------------------|---------------|-----------------
| getElementById(id)            | ID로 요소 찾기   | 단일 요소        |
| getElementsByClassName(class) | 클래스명으로 찾기  | HTMLCollection |
| getElementsByTagName(tag)     | 태그명으로 찾기    | HTMLCollection|
| querySelector(selector)       | CSS 선택자로 찾기  | 첫 번째 요소     |
| querySelectorAll(selector)    |CSS 선택자로 찾기   | NodeList      |




```javascript

// CSS 선택자 방식 (가장 많이 씀!)
const header = document.querySelector('#main-header');
const allButtons = document.querySelectorAll('.btn');
const firstParagraph = document.querySelector('p');
```


### 4. 상대적 접근 (Navigation)


| 메서드                         | 설명           
|------------------------------|--------------------------
| parentNode                   | 부모 요소  
| childNodes                   | 모든 자식 노드 (텍스트 노드 포함)
| children                     |자식 요소들 (HTML 요소만)
| firstChild / lastChild       | 첫/마지막 자식
| nextSibling / previousSibling|다음/이전 형제   
| nextElementSibling / previousElementSibling|다음/이전 요소 형제   


```javascript

const current = document.querySelector('#current');
const parent = current.parentNode;
const nextSibling = current.nextElementSibling;
const children = current.children;

```

### 5.텍스트 노드 다루기

```javascript

// innerHTML: HTML 태그까지 포함
const div = document.querySelector('#myDiv');
div.innerHTML = '<strong>Hello</strong> World!';

// textContent: 순수 텍스트만
div.textContent = 'Hello World!';

// innerText: 스타일이 적용된 실제 보이는 텍스트
div.innerText = 'Hello World!';

```

### 6. 요소 속성 다루기

```javascript

// 속성 읽기
const src = imgElement.getAttribute('src');

// 속성 설정
imgElement.setAttribute('src', 'new-image.jpg');

// 속성 직접 접근 (일반 속성)
imgElement.src = 'new-image.jpg';
inputElement.value = 'new value';
```

### 7. 스타일링

```javascript
// 방법 1: style 속성 직접 수정
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';

// 방법 2: setAttribute로 class 변경
element.setAttribute('class', 'highlight');

// 방법 3: classList 사용 (추천!)
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
element.classList.contains('selected'); // true/false

// 현재 스타일 조회 (계산된 스타일)
const styles = getComputedStyle(element);
console.log(styles.color);
```

### 8. 요소 생성 및 추가

```javascript

// 1단계: 요소 생성
const newDiv = document.createElement('div');
newDiv.textContent = '새로운 내용';
newDiv.classList.add('box');

// 2단계: DOM에 추가
document.body.appendChild(newDiv);  // 끝에 추가
document.body.prepend(newDiv);      // 앞에 추가
parentElement.insertBefore(newDiv, referenceElement);  // 특정 위치 앞에

// 여러 개 추가 (성능 좋음)
const fragment = document.createDocumentFragment();
for(let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
document.querySelector('ul').appendChild(fragment);
```

### 9. 요소 제거

```javascript

// 방법 1: 부모에서 자식 제거
const element = document.querySelector('#toRemove');
element.parentNode.removeChild(element);

// 방법 2: 최신 방식 (더 직관적)
element.remove();  // 자신을 바로 제거
```