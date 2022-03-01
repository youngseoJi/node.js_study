const http = require("http");
//const http = require('http2') //http2는 https와 같이 적용된다 - 배포할떄 사용할에정
const fs = require("fs");

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

// http에 있는 createServer 라는 api로 서버를 생성한다.
const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers); // {host: 'localhost:8080',...}
  console.log(req.httpVersion); // 1.1
  console.log(req.method); // GET
  console.log(req.url); // /favicon.ico
  const url = req.url; // /favicon.ico

  //! HTML 컨텐츠 보내주는 방법
  res.setHeader("Content-type", "text/html");
  if (url === "/") {
    // type은 text나 html 파일로 지정
    // html 파일을 불러온다. pipe파일을 연결해준다.
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    fs.createReadStream("./html/not-found.html").pipe(res);
  }
});

server.listen(8080);
