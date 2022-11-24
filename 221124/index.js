const { Contract } = require("./controll/compile");
const { Client } = require("./controll/client");
const instance = require("keythereum");

const [abi, bytecode] = Contract.compile("test.sol");
// console.log(abi, bytecode);

const client = new Client("ws://127.0.0.1:9005");

// console.log(client);

const contract = new client.web3.eth.Contract(abi);
// console.log(contract);
const txObject = { data: bytecode };

const Address = "b18d53d888825ac66c3b6d1cce285b8a244b93dc";

async function init() {
  // deploy() : 반환값이 promise 객체
  // 트랜잭션이 처리될 때까지 기다린다.
  const instance = await contract.deploy(txObject).send({ from: Address });
  // 배포하고 메소드나 변수들을 가져와야 하는데
  // 필요한게 abi와 contract Address
  // instance 객체 안에 options.address에 contract address가 들어있다.
}

const CA = "0xCC787dCe1297690b69d22Ba22A916EA6259bCA30";
console.log("CA: ", CA);

const deployed = new client.web3.eth.Contract(abi, CA);
// getter로 value값 가져옴
deployed.methods
  .value()
  .call()
  .then((data) => {
    console.log(data);
  });

deployed.methods
  .setValue("setValue: 임의로asdfasdf")
  .send({ from: Address })
  .then((data) => {
    console.log(data);
  });
init();
