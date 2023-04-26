/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/"+API_KEY

module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.18",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
