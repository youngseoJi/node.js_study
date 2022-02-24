const path = require("path");

// 운영체제 마다 표현되는 경로가 다르다.
// posix (unix: mac, Linux) "Users/temp/myfile.html"
// whimnows: 'C:\\temp\\myfile.html"

// path를 사용하여 운영체제마다 표기법이달라져도 잘 동작할 수 있도록 만든다.
console.log(__dirname); // 현재 수행되고 있는 폴더경로
console.log(__filename); // 파일이름이 포함된 경로

console.log(path.sep); //  경로구분자 /
console.log(path.delimiter); // 환경변수 구분자 :

// basename : 특정한 경로의 파일만
console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, ".js")); // 파일확장자를 제거 app

// dirname : 폴더만 (파일제외)
console.log(path.dirname(__filename)); // /Users/ys/ysproject/node/9-path

// extension : 확장자만
console.log(path.extname(__filename)); // .js

// parse : 정보를 parse해온다.
const parsed = path.parse(__filename);
console.log(parsed);
// {root: '/', dir: '/Users/ys/ysproject/node/9-path', base: 'app.js',  ext: '.js', name: 'app'}
parsed.root;
parsed.name;
// format : string 형태로 변환
const str = path.format(parsed);
console.log(str); // /Users/ys/ysproject/node/9-path/app.js

// isAbsolute : 절대경로인지 상대경로인지
console.log("isAbsolute?", path.isAbsolute(__dirname)); //절대경로/Users/여서 true
console.log("isAbsolute?", path.isAbsolute("../")); // 상대경로 false

// normalize : 자동으로 경로에러 이상한에러일경우 수정해줌
console.log(path.normalize("./folder///seb")); //folder/seb

// join : 폴더 내에 새로운 폴더 경로를 만들 수 있다.
console.log(__dirname + path.sep + "image"); // /Users/ys/ysproject/node/9-path/image
// 아래가 더 좋은 방식
console.log(path.join(__dirname, "image")); // /Users/ys/ysproject/node/9-path/image
