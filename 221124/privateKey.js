/*
오늘은 어제 스마트 컨트랙트 자바스크립트 콘솔에서 배포를 했는데
자바스크립트 노드 환경에서 구현 해볼 것

자바스크립트로 스마트 컨트랙트 배포

우분투에 .puppeth/node/keystore 폴더 안에 UTC--2022-11-23T05-....
이런 이름의 파일이 우리가 personal.newAccount() 함수로 계정을 생성했을 때
만들어지고 객체의 형태로 되어있고 암호화 되어 있는 계정 파일이라고 보면 된다.

단방향 암호화가 아니고 복호화를 통해서 개인키를 얻어내는게 가능한 내용이다.
keystore안에 있는 키파일을 복호화해서 개인키를 구할 수 있게 해주는 라이브러리
keythereum 라이브러리를 사용하면 개인키를 받을 수 있다.

package.json 만들고 npm init -y
npm i keythereum

solc 라이브러리도 설치
npm i solc

*/

const keythereum = require("keythereum");
const path = require("path");

// key 파일 안에서 주소 부분 가져와서 0x 뒤에 붙여준다.
// 즉, b18d53d888825ac66c3b6d1cce285b8a244b93dc 를 앞에 0x
const address = "0xb18d53d888825ac66c3b6d1cce285b8a244b93dc";

// 이 경로는 키파일 들어있는 폴더 상위의 까지 경로
const dir = path.join(__dirname);

// 키파일의 계정 정보 객체 만들기
const keyObject = keythereum.importFromFile(address, dir); // importFromFile 계정 정보 만들어 주는 함수 매개변수 첫 번째는 주소, 두 번째는 경로

const privateKey = keythereum.recover("xogns", keyObject).toString("hex");
console.log("0x" + privateKey);
