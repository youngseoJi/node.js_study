let num = 1;
// setInterval : 중지하지 않는이상 무한반복
// 1초마다 num ++ 1씩 더해준다.
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

// clearInterval: 반복되는 interval을 중지시켜준다.
setTimeout(() => {
  console.log("Timeout");
  clearInterval(interval);
}, 6000);
