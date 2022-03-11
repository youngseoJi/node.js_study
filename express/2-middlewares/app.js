import express from "express";

const app = express();

app.get(
  "/",
  (req, res, next) => {
    // res, next 중 꼭 하나로 끝나야 한다. 안 그렇다면? 서버가 중지된다.
    // 미들웨어 체이닝이 되게 꼭 연결시켜줘야한다.
    // next();
    // next('router');=> 함께 등록된 미들웨어는 무시하고 다음 미들웨어로 넘어가라 응답 3를 응답
    // next(new Error('error')) => 에러처리
    // res.send..
    return res.send("응답1");
  },
  (req, res, next) => {
    //  한 콜백함수에서 두번의 응답은 할 수 없어서 return을 꼭 해줘서 함수를 종료해준다. 오류발생예방
    return next();
    res.send("응답2");
  }
);

app.get("/", (req, res, next) => {
  res.send("응답3");
});
app.use("/", (req, res, next) => {
  res.status(400).send("경로가 일치하지 않아 아무 것도 응답받지 못한다.");
});
// 어떤 경로든, 어떤 요청인지 상관 없이 에러헨들러를 등록해줘야한다.
// 에러가 발생할 시 클라이언트에게 상태코드 500 전달한다.
app.use((err, req, res, next) => {
  console.error("error!");
  res.sendStatus(500);
});

app.listen(8080);
