import Web3 from "web3";

export const web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');
// export const web3 = new Web3(Web3.givenProvider || 'https://api1.mainnet.aidoskuneen.com:9443');
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
