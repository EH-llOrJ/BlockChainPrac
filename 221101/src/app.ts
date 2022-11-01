// 기본타입 boolean, number, string, undefined, null 등

// 숫자 타입
const num: number = 1231;

// 문자 타입
const str: string = "안녕";

// bool 타입
const bool: boolean = true;

// 배열은 타입[]
const array: number[] = [1, 2];

// undefined 타입
const undefinedType: undefined = undefined;

// null 타입
const nullType: null = null;

// 객체 타입
const obj: { str: string; num?: number } = { str: "안녕" };
// 객체 타입은 속성명? : 타입 형태로 지정하면
// 속성은 있어도 되고 없어도 되는 옵션값이 됨. 없어도 오류는 없음

// TypeScript는 별칭 타입 사용이 가능한데
type blockHeader = {
  version: string;
  height: number;
};

const block: blockHeader = {
  version: "1.0.0",
  height: 0,
};

// tuple(튜플) : tuple은 배열을 생성할 수 있게 하는 특정 위치에 특정 타입이 있어야 함
const tuple: [string, number, boolean?] = ["안녕", 100];
// 선택적 옵션은 맨뒤에!

// any : 타입 제한X TypeScript의 검사를 비활성화
//       any는 말 그대로 아무 타입이나 될 수 있다는 뜻(필요한 곳에서만)

// undiefined: undefined의 값만 가질 수 있음

const any: any = ["안녕", 100, true];

// unknown : 어떤 타입인지 모를 때, 변수를 사용하는 경우
// 데이터를 받아올 때 미리 타입을 알지 못할 때 사용
// unknown 타입으로 정의하면 컴파일러에게
// "변수의 타입이 unknown이라 어떤 값이든 올 수 있으니 엄격하게 검사해" 경고 줌
// 이것이 any와의 차이점

// 오류코드
// const numUnknown: unknown = "100";
// console.log(numUnknown.length);

// 정상코드
// const numUnknown: unknown = "100";
// if (typeof numUnknown === "string") {
//   console.log(numUnknown.length);
// }

// void : 비어있음을 의미 TypeScript에서 함수를 정의할 때 매개변수의 타입과
// return 값의 타입을 지정해주는 return 값이 없는 함수는 void 타입을 사용하고 있음

// function 함수명(): return 타입 {}
// void는 안쓰면 TypeScript는 자동으로 void타입을 줌
// 그래서 굳이 안써도 됨

function fun(): void {
  console.log("안녕");
}

myName.name = "안녕";
