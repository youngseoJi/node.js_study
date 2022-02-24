// process는 현재 동작되고 있는 노드 프로세스의 정보를 갖고온다.
const process = require("process");

console.log(process.execPath); //실행되고 있는 노드의 위치
console.log(process.version); // 노드 버전
console.log(process.pid); // 프로세스 id
console.log(process.ppid); // 프로세스 부모의 id
console.log(process.platform); // 플랫폼
console.log(process.env); // 환경변수
console.log(process.uptime()); // 얼마나 실행되고 있었는지
console.log(process.cwd()); // 실행하고 있는 노드의 경로
console.log(process.cpuUsage());
// 현재 코드가 다 수행됭 후
// 3번 실행) setTimeout 0초 있다가 콜백함수를 실행하라고 함
setTimeout(() => {
  console.log("setTimeouts");
}, 0);
// 2번 실행)
// nextTick 먼저 앞에있는 콜백함수보다 먼저 실행되게 한다.
process.nextTick(() => {
  console.log("nextTick");
});
// 1번 실행) forloop출력을 100번 한 후
for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
