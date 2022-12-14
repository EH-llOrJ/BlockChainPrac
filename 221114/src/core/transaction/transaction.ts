// transaction 객체 생성 클래스

import { TxIn } from "./txin";
import { TxOut } from "./txout";
import { UnspentTxOut } from "./unspentTxOut";
import { SHA256 } from "crypto-js";

export class Transaction implements ITransaction {
  public hash: string;
  public txIns: ITxIn[];
  public txOuts: ITxOut[];
  constructor(txIns: TxIn[], txOut: TxOut[]) {
    this.txIns = txIns;
    this.txOuts = txOut;
    this.hash = this.createTransactionHash();
  }

  // static
  // 인스턴스 생성하고 만들어진다.
  createTransactionHash(): string {
    // 배열의 value를 뽑아서 하나의 문자열로
    const txoutContent: string = this.txOuts
      .map((v) => Object.values(v))
      .join("");
    const txinCountent: string = this.txIns
      .map((v) => Object.values(v))
      .join("");

    return SHA256(txoutContent + txinCountent).toString();
  }

  createUTXO(): UnspentTxOut[] {
    const utxo: UnspentTxOut[] = this.txOuts.map(
      (txout: TxOut, index: number) => {
        return new UnspentTxOut(this.hash, index, txout.account, txout.amount);
      }
    );

    return utxo;
  }

  // 트랙잭션을 만들어주는 함수
  // 트랜잭션 만들 때 내 계정과 일치하는 UTXO 필요
  static createTransaction(
    receivedTx: any,
    myUTXO: UnspentTxOut[]
  ): Transaction {
    const { sum, txins } = TxIn.createTxIns(receivedTx, myUTXO);

    const txouts: TxOut[] = TxOut.createTxOuts(sum, receivedTx);

    const tx = new Transaction(txins, txouts);
    return tx;
  }
}
