const Web3 = require("web3");
const web3 = new Web3();
// [start rpc server on geth console] admin.startRPC("0.0.0.0", 8545)
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.eth.coinbase);
console.log(web3.eth.hashrate);
console.log(web3.eth);
