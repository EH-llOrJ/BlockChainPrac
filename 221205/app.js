/*
전에 만든 ERC20 토큰 편하게 만들어보기
오픈 제플린을 사용해서 토큰의 표준 인터페이스를 가져와서 사용할 수 있다.
ERC20을 우리가 직접 만들어 봤는데 직접 만들어서 사용하는게 아니고
설치 받아서 편하게 사용해보자.
표준 규격 있다고 했는데 그렇기 때문에 이미 만들어놓은 것 가져다가 사용하면 됨

오픈 제플린 설치
npm i openzeppelin-solidity
안되면 npm init -y 만들고 인스톨

트러플 초기화
npx truffle init

truffle-config.js 파일 수정부터

contracts 폴더에 HoonToken.sol, EthSwap.sol 만들고

migrations 폴더에 2_deploy_EthSwap.js 만들고 작성

가나쉬 실행
npx ganache-cli --chainId 7722 --networkId 7722

배포 진행
npx truffle migration

메타마스크에서 비공개 키로 계정 가져오고 토큰 net address 넣기


*/
