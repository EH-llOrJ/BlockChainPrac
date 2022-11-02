/*
typeScript

설치 명령어
npm i -D typescript ts-node @types/node

tsconfig.json 만들기
tsc --init

tsconfig.json paths 사용할 거라
npm i -D tsconfig-paths

우리가 필요한 모듈 설치

머클루트 해시값이 필요하니까
crypto-js, merkle 설치
npm i crypto-js merkle

typeScript는 외부 모듈을 사용할 경우에 타입 정의 파일이 필요합니다.
crypto-js, merkle 모듈 타입을 가져올 수 있는 모듈 설치

설치명령어
npm i -D @types/crypto-js
npm i -D @types/merkle
// -D = --save-dev

제네시스 블록 만들기

만든 것들 테스트 \

typeSccipt로 블록체인을 만들어봤는데 객체 지향적인 방법으로 코드를 작성하고 OOP(객체 지향 프로그래밍)

OOP는 프로그램의 설계방법 개념의 하나이다.

OOP는 프로그램을 단순히 실행 데이터 처리 방법만이 아니라

수많은 객체라는 단위를 만들어서 이 객체를 가지고 동작하는 상호작용을 서술한 방식이다.

OOP에서 객체는 하나의 역할을 수행하는 함수와 변수들의 묶음 데이터로 보면 된다.

이런 객체지향 프로그래밍은 프로그램을 만들 때 제일 작은 단위부터 만들어가는 방식을 선호함
하지만 작성된 코드들의 테스트가 어렵다는 단점이 있고 그래서 이런 부분 때문에 라이브러리를 사용해서 테스트 한다.

그냥 개발이 아니라 테스트 코드를 작성하면서 개발해 나가는 것이
TDD(Test_Driven Development) 기법

그래서 우리도 테스트 해보려고 Jest라는 애를 사용해보자

설치 명령어
npm i -D ts-jest @types/jest babel-core
npm i -D @babel/preset-typescript @babel/preset-env

*/
