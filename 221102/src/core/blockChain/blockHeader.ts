export class BlockHeader implements IBlockHeader {
  public version: string;
  public height: number;
  public timestamp: number;
  public previousHash: string;

  // 블록을 만들 때 블록의 바디와 헤더로 일단 나누어 놓았는데
  // 우리가 이해도를 높이기 위해 명시해 놓은 것
  // 블록 하나로 되어있는데 영역을 body header로 명시해 놓은 것
  // header에 이전 블록의 정보가 필요하기 때문에 생성 단계에서
  // Iblock의 형태인 _previousBlock을 매개변수로 전달해주는 것
  constructor(_previousBlock: IBlock) {
    this.version = BlockHeader.getVersion();
    this.timestamp = BlockHeader.getTimestamp();
    // 이전 블록의 높이에서 1을 증가시킨 값
    this.height = _previousBlock.height + 1;
    // 이전 블록의 해시값
    this.previousHash = _previousBlock.hash;
  }

  // static메소드를 사용하면 인스턴스에 메소드가 포함되지 않아서 인스턴스 생성마다
  // 메소드 생성되는 비효율적성을 방지 가능
  // 클래스 내에서 함수를 만들어 사용하고 싶을 때 static 메소드를 주로 활용함
  public static getVersion() {
    return "1.0.0";
  }

  public static getTimestamp() {
    return new Date().getTime();
  }
}
/*
여기서 implements는
extends와 implements 차이

extends : 클래스를 상속받을 때 사용한다. 클래스를 정의할 때 extends를 사용해서 부모 클래스를 상속 받게 되면 자식 클래스는 부모 클래스의 속성과 메소도를 가져올 수 있다(자식 클래스에서 추가 정의할 필요가 없다.)

implements : 특정 클래스 혹은 미리 정해놓은 인터페이스와 똑같은 형태로 클래스를 정의하고 싶을 때 (extends 이거랑 다른 것)
*/
