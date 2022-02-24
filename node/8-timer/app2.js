console.log("code1");

console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  // nextTick, setTimeout, 콜스택이 실행되는 시간-콜스택이 텅텅비어지는 시간
  //timeout 0: 1.578ms
  console.log("setTimeout 0");
}, 0);

console.log("code2");
setImmediate(() => {
  console.log("setImmediate 0");
});

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
});

// 실행순서
// code1
// code2
// code3
// process.nextTick
// setTimeout 0
// setImmediate 0
