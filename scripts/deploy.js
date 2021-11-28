const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(
      ["Harry Potter", "Hermione", "Albus Dumbledore"],       // Names
      ["QmfHwLErrTfNZXH58wovtQEDc4p995tVcdQR123S4EzSgf", // Images
      "QmbV2eWFKYcjf6z1wCfTKQCEM92SdNUvnWj2QjGFPczfWP", 
      "QmUz4vJm7VghQ8kPRXp6PKDrjvJhmpvXgFQ7z1rfZMsjxw"],
      [300, 70, 130],                    // HP values
      [50, 30, 60],                       // Attack damage values
      "Lord Voldemort", // Boss name
      "QmYfjD82KEYGxF9i4cTVyiBmyZouiTqa2385CjGspiJ98t", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();