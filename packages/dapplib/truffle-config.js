require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit foot curve recipe sad million history light army ghost'; 
let testAccounts = [
"0x443a4c67aca2eab1efd6cf664bd5a6a38d6115566d3906fa4dc847deac377568",
"0x915ba9a563e7ca54af678821a98d18adf236251fc6baf8747cb39325733fcf62",
"0x3b671d3f206717fe181d8eea1d57e8918a8e7f8cf66051612e57de6aaa8b2e43",
"0x4a158dfbcab256b54d827d39d9fa190d18b31691113e0675e7af29130489be9a",
"0x66d726e4f7454642cbe996cb2c7570ab41ca73b60144edd88599005689e0b198",
"0x6ef9215d23d25628f41b08e2619771ed7de46eae2b1ea42f7dac433c0656e8be",
"0x4a0eebcbc9b0e042aad22e98ccb4a09b0103ff4a6032147c1ce34e6d5e9ec23c",
"0x7ed8ce02eea076c4f49ca135a0a36fe6705da883b81c48a9f1b35a6bf1c9dcd9",
"0x4d1fcde5172d9d782f63a212770a70295e5ba768cfca5b7cefbd94dc687ac415",
"0x659bfcec83d9e517209735e1b024b47c8071b2ff4ade85500c940b54543ca0e0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

