const Voting = artifacts.require("Voting");

module.exports = function (deployed) {
  deployed.deploy(Voting, ["종화", "석", "지니", "태수"]);
};

/*
(0) 0x4f7D63Bc6934ed48214172CA1aBCAC0ed988E772 (100 ETH)
(1) 0x30b4BF174408Cd6dC1d965ce693C0EDda29b65e7 (100 ETH)
(2) 0x4FFC8b379287F3a1710669E47674DA9d29C24Ece (100 ETH)

Private Keys
==================
(0) 0xcfd4d01319a6ba8a9fd6886a1b19d3b9580a9a6cbcdae9ff0211efb28b6a9941
(1) 0x705a0653f133c1736937823fda28346a48d8933396265ffbaa11f2738f637d0b
(2) 0x52d5fe8549d2143ec61faff2a22230384c89962291c1f8687430e60a593a8ab9

*/
