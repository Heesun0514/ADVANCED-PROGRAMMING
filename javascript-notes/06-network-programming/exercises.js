


// Exercise 1: fetch GET Request

// Fetch a post from the JSON Placeholder API 
// and print the title of the first post.
// JSONPlaceholder API에서 게시글을 가져와서 첫 번째 게시글의 제목을 출력하세요.


fetch('https://jsonplaceholder.typicode.com/posts/1') // GET 요청.fetch는 기본적으로 HTTP GET 요청을 합니다

    // fetch 
        // request HTTP 
        // 이 함수는 Promise를 반환합니다
.then(response=>response.json())
    // 첫 번째 .then()은 fetch가 완료된 후 실행됩니다
    // response는 서버에서 받은 HTTP 응답 객체입니다
    // response.json()은 응답 본문을 JSON 형식으로 파싱하는 메서드이며, 이것도 Promise를 반환합니다

 .then(article=>console.log(article.title))   
    // 두 번째 .then()은 JSON 파싱이 완료된 후 실행됩니다
    // post는 파싱된 실제 데이터 객체(제목, 내용, ID 등을 포함)입니다
    // console.log(post.title)은 그중에서 title 속성(게시물 제목)만 콘솔에 출력합니다

    .then(error=>console.error(error)); // 실패






// Exercise 2: fetch POST 요청

// 새로운 게시글을 생성하는 POST 요청을 작성하세요.



const newPost = {
    title: 'My Post',
    body: 'Content here',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { //요청의 헤더(부가 정보)를 설정하는 객체를 엽니다.
        'Content-Type': 'application/json', //서버에 보내는 데이터의 형식이 JSON임을 알려줍니다.
    },
    body: JSON.stringify(newPost)
    // 실제로 서버로 전송할 데이터 본문(body)
    //newPost 객체를 JSON.stringify()로 JSON 문자열로 변환합니다.
    //(객체 자체는 HTTP로 보낼 수 없고, 문자열만 보낼 수 있기 때문입니다.)
})
.then(response => response.json()) //fetch()는 Promise를 반환합니다.
.then(data => console.log('Created:', data));//앞 단계에서 파싱된 실제 데이터(서버가 생성해준 게시글 객체, 보통 id 포함)를 data로 받고 출력







// Exercise 2:  3: async/await 변환

// 위 문제 2을 async/await 방식으로 변환하세요.


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
