const HoonToken = artifacts.require("HoonToken");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function (deployer) {
  // HoonToken 배포 진행
  await deployer.deploy(HoonToken);
  // 배포된 인스턴스 가져오기
  const token = await HoonToken.deployed();
  // HoonToken.address // 배포된 컨트랙트의 CA 가져와짐

  // 배포한 HoonToken컨트랙트의 CA값을 매개변수로 전달해서
  // EthSwap 컨트랙트 배포
  await deployer.deploy(EthSwap, token.address);
  await EthSwap.deployed();
};
