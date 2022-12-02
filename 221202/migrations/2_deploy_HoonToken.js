const HoonToken = artifacts.require("HoonToken");

module.exports = function (deployer) {
  deployer.deploy(HoonToken, "HoonToken", "STK", 10000);
};
