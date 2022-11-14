// unspentTxOut 생성 클래스

export class UnspentTxOut implements IUnspentTxOut {
  public txOutId: string; // transaction 객체의 hash 값
  public txOutindex: number; // transaction 객체에서 txOut 배열의 인덱스 값
  public account: string;
  public amount: number;
  constructor(
    txOutId: string,
    txOutindex: number,
    account: string,
    amount: number
  ) {
    this.txOutId = txOutId;
    this.txOutindex = txOutindex;
    this.account = account;
    this.amount = amount;
  }

  // UTXO 조회 함수
  // 인자값 전체 UTXO, 내 계정
  static getMyUnspentTxOuts(
    account: string,
    unspentTxOut: UnspentTxOut[]
  ): UnspentTxOut[] {
    return unspentTxOut.filter((utxo: UnspentTxOut) => {
      return utxo.account === account;
    });
  }
}

// UnspentTxOut 객체를 만들 때 txOut 객체 안에 있는 내용으로 만든다.
// UnspentTxOut 객체 안에 있는 account 속성과 amount 속성은 txOut 객체의 내용으로 구성
