const fs = require("fs").promises;
// 항상 api를 사용할때 인자확이 함수 리턴값 사용하기
// readfile : 데이터를 Buffer 형태로 읽어온다.
fs.readFile("./text.txt") // Hello 데이터를
  .then((data) => console.log(data)) // <Buffer 48 65 6c 6c 6f 21>
  .catch(console.error);

// 2번째 인자 옵션: 인코딩형태 지정
fs.readFile("./text.txt", "utf8") // Hello 데이터를 utf8로 인코딩
  .then((data) => console.log(data)) // Hello!
  .catch(console.error);

//writeFile : 기존의 파일 데이터에 덮어씌우기
fs.writeFile("./file.txt", "Hello, Dream corder! :)") //Hello, Dream corder! :)
  .catch(console.error);

// appendFile: 기존의 파일데이터를 유지하고 뒤에 붙이기
fs.appendFile("./file.txt", "Hello, Dream corder! :)") // Hello, Dream corder! :)Hello, Dream corder! :)
  .then(() => {
    // data까지 복사하려면 데이터를 받아온후 복사 실행
    fs.copyFile("./file.txt", "./file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);

// copyFile : 복사
// 비동기여서 이렇게 할 시 데이터는 없는 빈 파일만 복사
fs.copyFile("./file.txt", "./file2.txt") //
  .catch(console.error);

// mkdir : folder 생성
fs.mkdir("sub-foler") //
  .catch(console.error);
// 현재 경로에 있는 파일과 폴더를 출력함
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
