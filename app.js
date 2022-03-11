// express 사용하기
import express from "express";
// app에 express 인스턴스 담아 사용하기
const app = express();

// 미들웨어(콜백함수)를 원하는 경로, http메소드에 전달한다.

app.get("/sky/:id", (req, res, next) => {
  // console.log(req.path); //경로 /
  // console.log(req.headers); // 부가정보 {host: 'localhost:8080', connection: 'keep-alive',...}
  console.log(req.params); //{ id: 'ys' }
  console.log(req.params.id); // ys
  console.log(req.query); // { keyword: 'bts' }
  console.log(req.query.keyword); // bts

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
