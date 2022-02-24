// 내 서버가 동작하고 있는 운영체제정보를 갖고온다.
const os = require("os");

console.log(os.EOL === "\n"); // true

console.log(os.totalmem()); // 총메모리 17179869184
console.log(os.freemem()); // 사용가능한 메모리 347570176
console.log(os.type()); //타입 Darwin
console.log(os.userInfo());
//사용자 정보 {uid: 501,gid: 20,username: 'ys',homedir: '/Users/ys',shell: '/bin/zsh'}
console.log(os.cpus()); // cpu { model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz'...}
console.log(os.homedir()); // 홈폴더 Users/ys
console.log(os.hostname()); //호스트 이름 estellui-MacBookPro.local
