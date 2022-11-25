const helloworld = artifacts.require("HelloWorld");
// artifacts.require : 스마트 컨트랙트 계정 정보 읽어오는 코드 매개변수 "HelloWorld"는 json 파일명이다.

module.exports = function (deployer) {
  // deployer 트러플이 제공해주는 배포를 위한 툴
  // deployer.deploy 함수의 매개변수로 읽어온 계약 정보
  // HelloWorld.json 파일에서 읽어온 계약 정보
  deployer.deploy(helloworld);
};
