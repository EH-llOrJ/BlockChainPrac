const helloworld = artifacts.require("HelloWorld");

// 테스트 코드 실행 명령어
// npx truffle test
contract("HelloWorld", (account) => {
  console.log(account);

  let hello;
  describe("hello contract", () => {
    it("contract", async () => {
      hello = await helloworld.deployed();
    });
    it("get value", async () => {
      console.log(await hello.value.call());
    });
    it("set value", async () => {
      await hello.setValue("셋 밸류 맘대로");
      console.log(await hello.value.call());
    });
  });
});
