console.log("logging");

// 이전의 로그를 다 지워준다.
console.clear();

// log level
// 레벨별로 파일에 저장할 것인지, 레벨별로 다르게 콘솔을 설정하는 것 이 좋다.
console.log("log"); // 개발용
console.info("info"); // 중요한 정보를 남길 경우
console.warn("warn"); // 경보단계의 에러일 경우
console.error("error"); // 에러, 사용자 에러, 시스템 에러일 경우

// assert
// 특정한 조건일때t(true일 경우만) 로그를 출력을 해야할 경우
console.assert(2 === 2, "same!");
console.assert(2 === 3, "not same!");

// print object
const student = { name: "youngSeo", age: 29, company: { name: "sm" } };
console.log(student); // { name: 'youngSeo', age: 29 }
console.table(student); // 테이블 형태로 출력(표)
// dir
// 옵션을 조절하여 다르게 로그를 보여준다.
// depth는 객체가 중첩되었을때 보여줄 중첩정도를 선택한다.
console.dir(student, { showHidden: true, colors: false, depth: 0 });
// { name: 'youngSeo', age: 29, company: [Object] }
console.dir(student, { showHidden: true, colors: false, depth: 1 });
// { name: 'youngSeo', age: 29, company: { name: 'sm' } }

// time/ timeEnd
// 시작하고 끝나는 시간(얼마나 걸렸는지)을 알 수 있다.
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");
// for loop: 0.093ms

//  count
// 호출된 횟수룰 세준다.
function a() {
  console.count("a function");
}

a();
a();
// count 숫자를 초기화시킨다.
console.countReset("a function");
a();
// a function: 1
// a function: 2
// a function: 1

// console.countReset("a function");

// trace : 디버깅!
// 누가 이 함수를 호출했는지, 몇번째 줄에서 호출되었는지 알 수 있다.
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
  // 디버깅, f3() 함수는?  f2는 f1에서 실행 -> f3()는 h2()에서 실행되었다.
  // at f3 (/Users/ys/ysproject/node/2-console/app.js:65:11)
  // at f2 (/Users/ys/ysproject/node/2-console/app.js:61:3)
  // at f1 (/Users/ys/ysproject/node/2-console/app.js:58:3)
}
f1();
