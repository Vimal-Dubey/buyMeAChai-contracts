require("@nomicfoundation/hardhat-toolbox");

// import('hardhat/config').HardhatUserConfig 

const ALCHEMY_API_KEY = "put your key here";
const SEPOLIA_PRIVATE_KEY = "put your private key here";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
