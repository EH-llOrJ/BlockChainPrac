// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// ERC721 토큰 표준 가져오고
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

// ../node_modules/ 지움 remix는 알아서 찾기 때문에

contract Minting is ERC721 {
  constructor(
    string memory _name,
    string memory _symbol
  ) ERC721(_name, _symbol) {}

  function _minting(uint _tokenId) public {
    _mint(msg.sender, _tokenId);
    // _tokenId 키값 조회하면 누가 토큰의 소유자인지 확인 가능
    // _tokenId : 토큰의 고유값, msg.sender 토큰을 받는 계정
  }

  function tokenURI(uint) public pure override returns (string memory) {
    return
      "https://gateway.pinata.cloud/ipfs/QmbhzEcYN35R8wgUrYiF8WnUSX5X9FqaZsUGdJTTHJ67F7";
    // 반환값은 우리가 만들어서 넣어줄 json 객체
    // pure는 state값을 변경할 수 없다.
    // 이 함수 밖에 있는 값을 읽어올 수도 없고 변경도 불가능

    /*
    nft 객체의 내용
    {
    "name": "이름",
    "description": "설명",
    "image": "이미지의 경로",
    "attributes": ["속성 값"]
    }    
    */
  }
}
