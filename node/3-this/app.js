// this는 문맥에 따라서 달라진다.

function hello() {
  console.log(this); // 글로벌 객체
  console.log(this === global); //true
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("---- class ----");
    console.log(this); // A { num: 1 }
    console.log(this === global); // false
    // 클래스 내부에서의 this는 클래스 자기자신을 가리킨다.
  }
}

const a = new A(1);
a.memberFunction();
console.log("--- global scope ---");
console.log(this);
console.log(this === module.exports); // true
// js에서는 외부의 this는 global을 가리키나 node는 module exports를 가리킨다.
