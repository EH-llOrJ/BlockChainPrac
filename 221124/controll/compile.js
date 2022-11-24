const solc = require("solc");
// fs-extra : node fs 모듈에 없는 추가적이 file 시스템 함수를 사용할 수 있다.
// 종합버전으로 보면 된다.
const fs = require("fs-extra");
const path = require("path");

class Contract {
  static compile(_filename) {
    const contractPath = path.join(__dirname, "../contracts", _filename);
    const source = fs.readFileSync(contractPath, "utf8");
    // console.log(contractPath);
    // console.log(source);
    let solcInput = {
      language: "Solidity",
      sources: {
        contract: {
          content: source,
        },
      },
      settings: {
        optimizer: {
          enabled: true,
        },
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    };

    solcInput = JSON.stringify(solcInput);
    let contractObject = solc.compile(solcInput);
    // solc.compile : sol 파일을 컴파일 해주는 함수
    // console.log(solcInput);
    contractObject = JSON.parse(contractObject);
    console.log(contractObject);

    for (const key in contractObject.contracts) {
      const contractName = "HelloWorld"; // test.sol에 contract랑 일치해야함, ex) Hello World, HelloWorld!!!이렇게 쓰면 같지 않아서 안된다.
      const contract = contractObject.contracts[key][contractName];
      const abi = contract.abi;
      const bytecode = contract.evm.bytecode.object;
      const obj = { abi, bytecode };
      const _path = path.join(__dirname, "../upload", `${contractName}.json`);
      fs.outputJSONSync(_path, obj);
      return [abi, bytecode];
    }
  }
}

// Contract.compile("test.sol"); // 지우고 index.js로 불러옴
module.exports = { Contract };
