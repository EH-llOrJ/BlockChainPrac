import { Block } from "@core/blockChain/block";
import { DIFFICULTY_ADJUSTMENT_INTERVAL } from "@core/config";
import { UnspentTxOut } from "./../transaction/unspentTxOut";
import { Transaction } from "./../transaction/transaction";
import { TxIn } from "@core/transaction/txin";
import { TxOut } from "@core/transaction/txout";

export class Chain {
  private blockchain: Block[];
  private unspentTxOuts: IUnspentTxOut[];
  private transactionPool: ITransaction[];
  constructor() {
    this.blockchain = [Block.getGENESIS()];
    // UTXO라는 배열을 만들어 준 것
    this.unspentTxOuts = [];
    this.transactionPool = [];
  }

  // 트랜잭션 풀을 반환해주는 함수
  public getTransactionPool(): ITransaction[] {
    return this.transactionPool;
  }

  // 트랜잭션 풀에 트랜잭션 추가 함수
  public appendTransactionPool(transaction: ITransaction) {
    this.transactionPool.push(transaction);
  }

  // 트랜잭션 풀 업데이트
  public updateTransactionPool(newBlock: IBlock) {
    let txPool: ITransaction[] = this.getTransactionPool();
    newBlock.data.forEach((tx: ITransaction) => {
      txPool = txPool.filter((txp) => {
        txp.hash !== tx.hash;
      });
    });

    this.transactionPool = txPool;
  }

  // UTXO get함수
  public getUnspentTxOuts(): IUnspentTxOut[] {
    return this.unspentTxOuts;
  }

  // UTXO 추가 함수
  public appendUTXO(utxo: IUnspentTxOut[]) {
    // unspentTxOut배열에 utxo 값을 복사해서 배열에 추가
    this.unspentTxOuts.push(...utxo);
  }

  // 마이닝 블록
  public minigBlock(account: string): Failable<Block, string> {
    // 코인베이스 트랜잭션의 내용을 임의로 만든 것
    const txin: ITxIn = new TxIn(
      "",
      this.getLatestBlock().height + 1,
      undefined
    );
    const txout: ITxOut = new TxOut(account, 50);
    const coinbaseTransaction: Transaction = new Transaction([txin], [txout]);
    const utxo = coinbaseTransaction.createUTXO();
    // createUTXO 함수로 UTXO에 담을 객체를 만들어 준 것
    this.appendUTXO(utxo);

    return this.addBlock([coinbaseTransaction]);
  }

  public getChain(): Block[] {
    return this.blockchain;
  }

  public getLength(): number {
    return this.blockchain.length;
  }

  public getLatestBlock(): Block {
    return this.blockchain[this.blockchain.length - 1];
  }

  public addBlock(data: ITransaction[]): Failable<Block, string> {
    const previousBlock = this.getLatestBlock();
    const adjustmentBlock: Block = this.getAdjustmentBlock();
    const newBlock = Block.generateBlock(previousBlock, data, adjustmentBlock);
    const isValid = Block.isValidNewBlock(newBlock, previousBlock);

    if (isValid.isError) return { isError: true, value: "에러남" };

    this.blockchain.push(newBlock);

    return { isError: false, value: newBlock };
  }

  // 체인 검증 코드
  public isValidChain(chain: Block[]): Failable<undefined, string> {
    // 최초 블록 검사 하는 코드
    // const genesis = chain[0]

    for (let i = 1; i < chain.length; i++) {
      const newBlock = chain[i];
      const previousBlock = chain[i - 1];
      const isValid = Block.isValidNewBlock(newBlock, previousBlock);
      if (isValid.isError) return { isError: true, value: isValid.value };
    }
    return { isError: false, value: undefined };
  }

  public replaceChain(receivedChain: Block[]): Failable<undefined, string> {
    // 본인 체인과 상대방 체인을 검사하는
    // 상대방
    const latestReceivedBlock: Block = receivedChain[receivedChain.length - 1];
    // 본인
    const latestBlock: Block = this.getLatestBlock();

    if (latestReceivedBlock.height == 0) {
      return { isError: true, value: "받은 블록이 최초 블록" };
    }
    if (latestReceivedBlock.height <= latestBlock.height) {
      return { isError: true, value: "본인의 블록 길거나 더 길거나 같은 블록" };
    }
    if (latestReceivedBlock.previousHash === latestBlock.hash) {
      return { isError: true, value: "블록이 하나만큼 모자라다." };
    }

    // 체인을 갱신해줌
    this.blockchain = receivedChain;

    return { isError: false, value: undefined };
  }

  // 생성 시점기준으로 블록 높이 -10인 블록 구하기

  // 현재 높이값 < DIFFICULTY_ADJUSTMENT_INTERVAL : 최초 블록 반환 하고
  // 현재 높이값 > DIFFICULTY_ADJUSTMENT_INTERVAL : -10번째 블록 반환
  public getAdjustmentBlock() {
    const currentLength = this.getLength();
    const adjustmentBlock: Block =
      this.getLength() < DIFFICULTY_ADJUSTMENT_INTERVAL
        ? Block.getGENESIS()
        : this.blockchain[currentLength - DIFFICULTY_ADJUSTMENT_INTERVAL];

    return adjustmentBlock; // 최초 블록 or -10번째 블록 반환
  }

  updateUTXO(tx: ITransaction) {
    // txOutId, txOutIndex, account, amount
    // UTXO 배열을 가져오고 getUnspentTxOuts함수를 사용해서
    const unspentTxOuts: UnspentTxOut[] = this.getUnspentTxOuts();
    // UTXO에 추가할 unspentTxOuts 객체를 생성
    // 트랜잭션 객체의 배열 안에 있는 txOut 객체를 사용해서 새로 생성될
    // UnspentTxOut 객체를 만들어준다.
    const newUnspentTxOuts = tx.txOuts.map((txout, index) => {
      return new UnspentTxOut(tx.hash, index, txout.account, txout.amount);
    });

    // filter로 unspentTxOuts 배열 안에서 txout객체들은 제거하고 생성된
    // newUnspentTxOuts 배열을 붙여준다.
    const tmp = unspentTxOuts
      .filter((v1, UnspentTxOut) => {
        const bool = tx.txIns.find((v2: TxIn) => {
          return v1.txOutId === v2.txOutId && v1.txOutindex === v2.txOutindex;
        });
        // !undefined == true; 값이 언디파인드면
        // !{} == false; 값이 있는데 빈 배열이면
        return !bool;
      })
      .concat(newUnspentTxOuts);
    // UTXO에 사용한 unspentTxOuts 객체 제거와 생성된 unspentTxOuts 객체를 UTXO에 추가

    // tmp배열을 reduce 함수로 acc 배열 안에서 해당 조건에 맞는 값을 내보내주고
    // acc 배열에 push해서 배열에 넣어주고 acc 배열을 반환해서
    // unspentTmp에 담고 this.unspentTxOuts에 바인딩
    let unspentTmp: UnspentTxOut[] = [];
    const result = tmp.reduce((acc, utxo) => {
      const find = acc.find(({ txOutId, txOutindex }) => {
        return txOutId === utxo.txOutId && txOutindex === utxo.txOutindex;
      });
      if (!find) acc.push(utxo);
      return acc;
    }, unspentTmp);
    this.unspentTxOuts = result;
  }
}
