const hre = require("hardhat");

async function main() {
  // Deploying the contract
  const MyContract = await hre.ethers.getContractFactory("buyMeAChai");
  const myContract = await MyContract.deploy(/* constructor arguments if any */);
  console.log("ho gya deploy");
  console.log(await myContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
