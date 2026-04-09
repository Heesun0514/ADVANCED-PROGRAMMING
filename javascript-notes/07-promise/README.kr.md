# 4. Promises (프로미스)


# Promises - 비동기 처리의 해결사


> 🎯 목표: Promise 개념 이해, 콜백 지옥 탈출, Promise 체이닝 마스터

## 📌 오늘 배운 핵심 개념

### 1. 콜백 지옥(Callback Hell) 문제 복습

```javascript
// ❌ 콜백 지옥 - 유지보수 불가능
getUser(1, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getPaymentInfo(details.paymentId, (payment) => {
                console.log(payment);
            });
        });
    });
});

```
> 문제점 

- 가독성 극악
- 에러 처리 어려움
- 병렬 처리 불가능
- 디버깅 지옥

### 2.Promise란? Promise는 "미래에 값을 전달하겠다는 계약(contract)"입니다

```javascript
// Promise의 3가지 상태
// 1. Pending (대기 중) - 초기 상태
// 2. Fulfilled (이행됨) - 성공
// 3. Rejected (거부됨) - 실패

const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    const success = true;
    
    if (success) {
        resolve('성공!');  // fulfilled 상태로
    } else {
        reject('실패!');   // rejected 상태로
    }
});
```