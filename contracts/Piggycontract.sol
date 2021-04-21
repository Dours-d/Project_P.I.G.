pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./Safemath.sol";
import "./Ownable.sol";

contract Piggycontract is IERC721, Ownable {

	using SafeMath for uint256;

	uint256 public constant CREATION_LIMIT_GEN0 = 10;
	string public constant name = "CoronaPigs";
	string public constant symbol = "CPG";

	event Birth(
		address owner, 
		uint256 pigId,
		uint256 mumId,
		uint256 dadId, 
		uint256 genes
	);

	event Transfer(
		address _from, 
		address _to, 
		uint256 _tokenId
 	);

	struct Piggy {
		uint256 genes;
		uint64 birthTime;
		uint32 mumId;
		uint32 dadId;
		uint16 generation;
	}

	Piggy[] piggies;

	mapping (uint256 => address) public PiggyIndexToOwner;
	mapping (address => uint256) ownershipTokenCount;
	
	uint256 public gen0Counter;

	function createPiggyGen0(uint256 _genes, address _owner) public onlyOwner returns(uint256){
		require(gen0Counter < CREATION_LIMIT_GEN0);

		gen0Counter++;

		return _createPiggy(0, 0, 0, _genes, _owner);
	}
	
	function _createPiggy(
		uint256 _mumId,
		uint256 _dadId,
		uint256 _generation,
		uint256 _genes,
		address _owner

	) private returns (uint256) {
		Piggy memory _piggy = Piggy({
			genes: _genes,
			birthTime: uint64(now),
			mumId: uint32(_mumId),
			dadId: uint32(_dadId),
			generation: uint16(_generation)
		});

		uint256 newPigId = piggies.push(_piggy)-1;
		
		emit Birth(_owner, newPigId, _mumId, _dadId, _genes);

		_transfer(address(0), _owner, newPigId);
		
		return newPigId;
	}

    function getPiggy(uint256 pigId) external view returns(
    	uint256 genes,
		uint64 birthTime,
		uint32 mumId,
		uint32 dadId,
		uint16 generation
    )
    {
    	Piggy storage piggy = piggies[pigId];
    	
    	birthTime = uint64(piggy.birthTime);
    	mumId = uint32(piggy.mumId);
    	dadId = uint32(piggy.dadId);
    	generation = uint16(piggy.generation);
    	genes = piggy.genes;
    }

    function balanceOf(address owner) external view returns (uint256 balance){
    	return ownershipTokenCount[owner];
	}

	function totalSupply() external view returns (uint256 total){
		return piggies.length;
	}

	function ownerOf(uint256 tokenId) external view returns (address owner){
		return PiggyIndexToOwner[tokenId];
	}

	function transfer(address _to, uint256 _tokenId) external{
		require(_to != address(0), " receiver cannot be the zero address.");
        require(_to != address(this));
        require(_owns(msg.sender, _tokenId));

        _transfer(msg.sender,_to, _tokenId);
	}

    function _transfer(address _from, address _to, uint256 _tokenId) internal{
    	
        ownershipTokenCount[_to]++;
        PiggyIndexToOwner[_tokenId] = _to;

        if(_from!= address(0)){
        	ownershipTokenCount[_from]--;
        }
        emit Transfer(_from,_to,_tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId) internal view returns(bool){
    	return PiggyIndexToOwner[_tokenId] == _claimant; 
    }
}



