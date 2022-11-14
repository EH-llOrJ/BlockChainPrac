import { Wallet } from "@core/wallet/wallet";

// TxOut 객체를 만들 클래스

export class TxOut implements ITxOut {
  public account: string; // 보낼 주소
  public amount: number; // 보낼 코인
  constructor(account: string, amount: number) {
    this.account = account;
    this.amount = amount;
  }

  // 인자값 : 보내는 계정, 받는 계정, 합, 코인갯수
  // txOut 배열을 추가할 함수
  static createTxOuts(sum: number, receivedTx: any): TxOut[] {
    // receivedTx.amount =  보낼 코인
    // receivedTx.sender =  보내는 사람의 공개키
    // receivedTx.received =  받는 사람 계정

    const { amount, sender, received } = receivedTx;
    const senderAccount: string = Wallet.getAccount(sender);

    // 받는 사람 txOut
    const receivedTxOut = new TxOut(received, amount);

    // 보내는 사람 txOut
    // sum보내는 사람의 합
    const senderTxOut = new TxOut(senderAccount, sum - amount);

    // 보내는 사람의 코인이 0보다 작거나 같으면
    if (senderTxOut.amount <= 0) return [receivedTxOut];

    return [receivedTxOut, senderTxOut];
  }
}
