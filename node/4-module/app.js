// 프로젝트를 만들때도 연관있는 것들을 한 파일내에 모듈별로 관리하는 것 이좋다.

// require로 exports한 counter.js 파일에서 함수들을 갖고와서 사용한다.
const counter = require("./counter.js");

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount()); //3
