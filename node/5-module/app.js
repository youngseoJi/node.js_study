// 최신 import와 export방법

// 지정하여 갖고 올때
// import { increase, getCount } from "./counter.js";

// 동일한 객체에 모든 것을 들고오고 싶을때 counter라는 이름의 객체로 다 담아옴
import * as counter from "./counter.js";

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount()); //3
