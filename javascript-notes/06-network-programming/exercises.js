


// Exercise 1: fetch GET Request

// Fetch a post from the JSON Placeholder API 
// and print the title of the first post.
// JSONPlaceholder API에서 게시글을 가져와서 첫 번째 게시글의 제목을 출력하세요.


fetch('https://jsonplaceholder.typicode.com/posts/1') 
    // fetch 
        // request HTTP 
        // 이 함수는 Promise를 반환합니다
.then(response=>response.json())
    // 첫 번째 .then()은 fetch가 완료된 후 실행됩니다
    // response는 서버에서 받은 HTTP 응답 객체입니다
    // response.json()은 응답 본문을 JSON 형식으로 파싱하는 메서드이며, 이것도 Promise를 반환합니다

 .then(post=>console.log(post.title))   
    // 두 번째 .then()은 JSON 파싱이 완료된 후 실행됩니다
    // post는 파싱된 실제 데이터 객체(제목, 내용, ID 등을 포함)입니다
    // console.log(post.title)은 그중에서 title 속성(게시물 제목)만 콘솔에 출력합니다






문제 2: fetch POST 요청

새로운 게시글을 생성하는 POST 요청을 작성하세요.

<details> <summary>💡 정답 보기</summary>
javascript
const newPost = {
    title: 'My Post',
    body: 'Content here',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost)
})
.then(response => response.json())
.then(data => console.log('Created:', data));
</details>
문제 3: async/await 변환

위 문제 1을 async/await 방식으로 변환하세요.

<details> <summary>💡 정답 보기</summary>
javascript
async function getFirstPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const post = await response.json();
        console.log(post.title);
    } catch (error) {
        console.error(error);
    }
}

getFirstPost();
</details>