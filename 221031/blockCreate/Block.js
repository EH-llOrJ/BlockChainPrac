/*
최초 블록 만들기(제네시스 블록)
*/

const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// 블록 해더를 만들 클래스
class Header {
  constructor(_height, _previousHash) {
    // 블록의 버전
    this.version = "";
    // 블록의 높이
    this.header = _height;
    // 블록의 생성 시간
    this.timestamp = "";
    // 이전 블록의 해시값
    // 최초 블록은 이전 블록의 해시값이 없으니까 값이 없으면
    // 0으로 만들어진 문자열 넣어줌
    this.previousHash = _previousHash || "0".repeat(64);
  }

  // static으로 만들어서 버전 정보를 전역적으로 볼 수 있게
  static getVersion() {
    return "1.0.0";
  }

  static getTimeStamp() {
    return new Date().getTime();
  }
}

// 블록 class

class Block {
  constructor(_height, _previousHash) {
    // 블록의 버전
    this.version = _header.version;
    // 블록의 높이도 해더에서 주고
    this.header = _height.height;
    // 블록의 생성 시간
    this.timestamp = _height.version;
    this.data = _data;
    (this.merkle = ""), (this.hash = "");
    // 이전 블록의 해시값
    // 최초 블록은 이전 블록의 해시값이 없으니까 값이 없으면
    // 0으로 만들어진 문자열 넣어줌
    this.previousHash = _previousHash || "0".repeat(64);
  }
}
