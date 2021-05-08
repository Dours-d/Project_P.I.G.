const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
var instance;
var user;
var contractAddress = "0x3d71D74eE25FaD179fA5dB3E027D94467d8F074C";

$(document).ready(function(){
	window.ethereum.enable().then(function(accounts){
		instance = new ethers.Contract(contractAddress, abi, provider);
		user = accounts[0];
		console.log(instance);
	})
})