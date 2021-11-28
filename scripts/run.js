const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Harry Potter", "Hermione", "Albus Dumbledore"],       // Names
      ["https://www.india.com/wp-content/uploads/2016/11/Harry-Potter-Main-Article-1.jpg", // Images
      "https://assets.teenvogue.com/photos/574ec8657e9b8ce658ffc331/16:9/w_2560%2Cc_limit/MCDHAP2_EC288_H.JPG", 
      "https://www.quirkybyte.com/wp-content/uploads/2017/03/dd.jpg"],
      [300, 70, 130],                    // HP values
      [50, 30, 60],                      // Attack damage values
      "Lord Voldemort", // Boss name
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2018/07/Voldemort-Harry-Potter.jpg", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
  );
  await gameContract.deployed();
  
  console.log("Contract deployed to:", gameContract.address);
  let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();
console.log("Done!");
  
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