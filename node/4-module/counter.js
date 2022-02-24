let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// 외부에서는 정의한 함수가 연결된다.
module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module);

// exports.increase = increase;
// exports은 module.exports을 참조하고 있어서 똑같이 작동
// but 오류가 생길경우가 있어서 정확히 쓰는 것 이 좋다.

// console.log(module.exports === exports) -> true
// exports = {}; // 새로운 객체를 할당하면서 아에 값이 달라진다.
// console.log(module.exports === exports) -> false
