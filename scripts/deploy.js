async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Airdrop = await ethers.getContractFactory("Airdrop");
    const airdrop_instance = await Airdrop.deploy();
  
    console.log("Airdrop contract address:", airdrop_instance.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
