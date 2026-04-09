


// Exercise 1: fetch GET Request
//Fetch a post from the JSON Placeholder API 
// and print the title of the first post.
// JSONPlaceholder API에서 게시글을 가져와서 첫 번째 게시글의 제목을 출력하세요.









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