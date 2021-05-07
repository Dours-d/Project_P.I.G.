var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress;

$(document).ready(function(){
	window.ethereum.enable().then(function(accounts){
		instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
		user = accounts[0];
	})
})