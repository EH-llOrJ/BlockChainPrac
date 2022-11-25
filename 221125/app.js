/*
트러플을 사용해서 이더리움 디앱 개발을 쉽게 할 수 있다.
트러플이 Dapp 개발을 하는데 도와주는 블록체인 프레임 워크
블록체인에서 스마트 계약을 컴파일하고 배포할 때 복잡한 구조를
추상화 시켜주는 역할

트러플은 스마트 컨트랙트를 쉽게 배포할 수 있게 도와준다.
트러플에서는 web3라이브러리를 사용한다.

package.json 만들고 npm init -y
트러플 설치
npm i truffle

트러플 버전 확인
npx truffle version
npx truffle -v 도 되네

트러플 초기화 설치
npx truffle init

solc 설치
npm i solc

.gitkeep git사용자가 만든 빈 파일
빈 폴더를 유지한다. 빈 폴더를 커밋한 것.

트러플 폴더들
contracts : 스마트 컨트랙트 코드를 작성하는 폴더
migrations : 배포 관련 코드를 컨트랙트 별로 모으는 폴더
test : 스마트 컨트랙트 테스트 코드 작성하는 폴더
truffle-config.js : 트러플 환경 설정 파일 컴파일하는 솔리티디 버전도 여기에 명시


*/
