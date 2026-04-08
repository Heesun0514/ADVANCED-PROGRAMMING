# DOM API (Document Object Model)

## 📌 오늘 배운 핵심 개념

### 1.  DOM이란??
- 브라우저가 페이지 내용을 트리 구조로 표현한 것
- HTML 요소들의 계층적 관계를 나타냄
- Javascript로 DOM을 읽고/쓰고/수정할 수 있음



# 🎯 DOM이 필요한 이유

웹페이지가 단순히 HTML 문서를 화면에 그려내기만 하는 것이라면 DOM은 필요 없다.

하지만 웹페이지는 JavaScript에 의해 **내용이 변경**되거나 **요소들에 기능이 부여**되는 등, **"명령을 받을 수 있는 것"** 이어야 합니다.

---

# 🏭 브라우저의 역할
HTML 문서 (설계도)
↓
브라우저 (공장)
↓
웹페이지 (로봇/관절인형)



1. 브라우저는 **HTML 설계도**를 받습니다
2. 설계도에 있는 모든 요소들을 **각각의 종류에 맞는 클래스의 객체**로 생성합니다
3. 객체들을 **트리 구조로 연결**하여 **DOM이라는 실체**를 만들어냅니다

---

# 🎭 DOM = 관절인형 비유

| 비유 | 실제 의미 |
|------|-----------|
| **관절인형** | DOM (객체로 만들어진 웹페이지) |
| **조종하는 사람** | JavaScript |
| **움직임** | 웹페이지의 동적 변화 |

> JavaScript가 이 **관절인형(DOM)을 잡아서 움직일 수 있는 매개체**입니다.

---

# 📊 DOM 유무 비교

| | DOM 없음 | DOM 있음 |
|--|----------|----------|
| 웹페이지 성격 | **정적 이미지** | **동적 객체** |
| JavaScript 조작 | ❌ 불가능 | ✅ 가능 |
| 내용 변경 | ❌ (새로고침 필요) | ✅ (실시간) |
| 버튼 클릭 반응 | ❌ | ✅ |
| 실시간 업데이트 | ❌ | ✅ |

---

# 🔑 핵심 요약 (3줄)

| 번호 | 개념 | 비유 |
|------|------|------|
| 1 | **브라우저 = 공장** | HTML 설계도를 받아서 DOM을 생산 |
| 2 | **DOM = 관절인형** | 각 요소를 객체로 만들어 연결한 실체 |
| 3 | **JavaScript = 조종사** | DOM 객체에 명령을 내려 웹페이지를 움직임 |

---

# 💡 최종 결론

> **DOM은 "HTML을 단순한 그림이 아니라, JavaScript로 움직일 수 있는 살아있는 문서로 만들어주는 브라우저의 내부 표현"입니다.**

HTML (설계도) → DOM (관절인형) → JavaScript (명령) → 움직이는 웹페이지





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


## exercise 

JavaScript로 다음 요소들을 찾아보세요:

- 1.id가 "app"인 div
- 2.class가 "list"인 ul
- 3.class가 "special"인 li
- 4.모든 li 요소들

```javascript

<div id="app">
    <ul class="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li class="special">Item 3</li>
    </ul>
</div>

```

1.The div with the ID "app".

```javascript

const app=document.getElementByid('app')
// or 
const app2 = document.querySelector('#app');
```

2.The ul with the class "list".

```javascript
const list=document.getElementbyClassName('list')[0];
// or 
const list2 = document.querySelector('.list');
```

3.The li with the class "special".

```javascript
const speical =document.quesrySelector('.speical');
```


4.All li elements.

```javascript
const allLis=document.querySelectorAll('li');
console.log(allLis.length); //3
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



## exercise 
버튼을 클릭하면 h1 제목이 "Welcome!"로 바뀌도록 코드를 작성하세요.

```javascript

//html
// <h1 id="title"> Hello</h1>
// <button id='changeBtb>click</button>

const title=document.querySelector('#title');
const button=document.querySelector('#changeBtn');

button.addEventListener('click',function){
    title.textContent='Welcome!'
    // or title.innerText=''Welcome!'

};


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



## exercise 
class가 "list"인 ul의 배경색을 lightblue로 변경하세요.

```javascript

const list=document.querySelector('.list')
list.style.backgroundColor='Lightblue';


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

## exercise 
"새로운 아이템"이라는 텍스트를 가진 li 요소를 ul의 끝에 추가하세요.

```javascript
const ul=document.querySelector('.list');
const newLi=document.createElement('li');
newLi.textContent='newItem';
ul.appendChild(newLi);
```



### 9. 요소 제거

```javascript

// 방법 1: 부모에서 자식 제거
const element = document.querySelector('#toRemove');
element.parentNode.removeChild(element);

// 방법 2: 최신 방식 (더 직관적)
element.remove();  // 자신을 바로 제거
```


## exercise 
class가 "special"인 li 요소를 삭제하세요.

```javascript
const speical=document.querySelector('.special');
speical.remove();

// or 

speical.parentNode.removeChild(speical);
```
