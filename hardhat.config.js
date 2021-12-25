require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = 'd5a339f00f4fab36900cb27c942057c3995fe4ce6bf518bf5dfe9eddb5f10b7c'
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
        url: 'https://ropsten.infura.io/v3/77115852fa3a440fb6519a95e87dc64b',
        accounts: [`0x${privateKey}`]
    }
  }
};
