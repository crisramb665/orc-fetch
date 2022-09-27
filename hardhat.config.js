/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");

const INFURA_URL_RINKEBY = "https://rinkeby.infura.io/v3/ae4316d33ea5427e917e9319ae959046";
const INFURA_URL_GOERLI = "https://goerli.infura.io/v3/ae4316d33ea5427e917e9319ae959046";
const PRIVATE_KEY = "ae4986dc6407765ef74734dde07f7fac817af3ff22e1263af0a40de9c244a7ff";

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_URL_RINKEBY,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    goerli: {
      url: INFURA_URL_GOERLI,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
