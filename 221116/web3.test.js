const Web3 = require("web3");

describe("web3 test", () => {
  let web3;
  let accounts; // 주소
  let sender; // 보내는 사람
  let received; // 받는 사람

  it("web3 연결", () => {
    // http://127.0.0.1:8545 경로의 가나쉬에서 실행되고 있는 이더리움 클라이언트로 web3 인스턴스 생성
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  });

  // 최신 블록의 높이
  it("최신 블록 높이", async () => {
    const latestBlock = await web3.eth.getBlockNumber();
    console.log(latestBlock);
  });

  // 전체 account 가져오기
  it("전체 주소", async () => {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
  });
});
