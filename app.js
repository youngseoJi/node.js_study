// node.js에서의 첫 시작 global이라는 객체
const fs = require("fs");
console.log(global);

global.hello = () => {
  global.console.log("hello");
};

global.hello();
hello();
// global은 삭제가능
