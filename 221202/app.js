/*
토큰 발행하기
토큰을 발행해주기

트러플 초기화해서 만들고
npx truffle init

truffle-config.js 수정

contracts 폴더에 ERC20.sol 파일 만들기
contracts 폴더에 Token.sol 파일 만들기

migrations폴더에 2_deploy_HoonToken.js 만들기

npx ganache-cli --chainId 7722 --networkId 7722
메타마스크 체인아이디도 7722로 맞춰줘야함
메타마스크 네트워크 -> 네트워크이름클릭 -> 체인아이디

npx truffle migration

1,2번째 계정 가져오고 둘 다 토큰 HoonToken.js CA로
토큰 가져오고

2번째 계정에서 10ETH (1ETH = 200가스)
HoonToken.json 안에 networks address CA로 보내면
자동으로 1번째 계정 가스 빠지고
2번째 계정 2000가스가 증가해야함

*/
