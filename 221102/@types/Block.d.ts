/*
블록 타입 정의
*/

// 인터페이스로 만든 이유
// version, height , timestamp, previousHash
// 이런 형태로 된 클래스를 편하게 사용하려고 만든 거고
declare interface IBlockHeader {
  version: string;
  height: number;
  timestamp: number;
  previousHash: string;
}

declare interface IBlock extends IBlockHeader {
  merkleRoot: string;
  hash: string;
  nonce: number;
  difficulty: number;
  data: string[];
}

/*
IBlock interface
version: string;
height: number;
timestamp: number;
previousHash: string;
merkleRoot: string;
hash: string;
nonce: number;
difficulty: number;
data: string[];
이 모양의 인터페이스가 IBlock

블록 생성을 하는 클래스를 만들 때 블록 해더 부분을 만들어주는 클래스를
구분해서 따로 만들고 해더 클래스를 상속 받아옴

nonce difficulty이 속성들은
차후에 채굴 난이도와 마이닝 부분을 구현할 때 사용할 속성
*/
