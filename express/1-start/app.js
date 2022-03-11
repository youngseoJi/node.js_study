// express를 사용하기 위해 갖고온다.
import express from "express";
// express 인스턴스를 app에 담아 사용.
const app = express();

// 미들웨어(콜백함수)를 원하는 경로, 원하는 http 메소드에 등록해준다.
// get 메소드의 root 경로에 콜백함수 등록

app.get("/", (req, res, next) => {
  res.send("루트경로에 보낸 요청에 응답중");
});

app.get("/house/:id", (req, res, next) => {
  // console.log(req.path); //경로 /
  // console.log(req.headers); // 부가정보 {host: 'localhost:8080', connection: 'keep-alive',...}
  console.log(req.params);
  // http://localhost:8080/house/ys => { id: 'ys' }
  console.log(req.params.id);
  //  http://localhost:8080/house/ys =>  ys
  console.log(req.query);
  //http://localhost:8080/house/ys/?keyword=bts => { keyword: 'bts' }
  console.log(req.query.keyword);
  //http://localhost:8080/house/ys/?keyword=bts => bts

  // 요청에 맞는, 데이터를  클라이언트에게 전달한다.
  // res.send("hello");
  // json 형태로 보낼 수 있다.
  // res.json({ name: "youngSeo" });
  // 또는 상태코드만 전송하기
  // res.sendStatus(400);
  // 상태코드와 데이터를 함께 전송하기
  res.status(201).send("created");
});
app.listen(8080);
// 8080 포트에서 접속!
//port : 서버에 어떤 어플리케이션에 접속하길 원하는지 알려준다.
