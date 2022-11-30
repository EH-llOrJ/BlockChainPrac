/*
import App from './front/src/App';
사과 판매 앱 만들기
스마트 컨트랙트 함수의 payable 속성
솔리디티 언어는 코인이나 토큰을 즉, 가상화폐를 다루는 언어이고
다른 언어들은 프로그램을 개발하는데 사용하지만 솔라디티는
가상화폐라는 돈을 가지고 사용하기 위해 사용하는 언어

솔리디티로 이더를 전송하는 스마트 컨트랙트를 작성하기 위해서는
payable을 작성한 함수에서만 이더를 보낼 수 있다.

먼저 트러플  init
npx truffle init

truffle-config.js  설정

contracts에 AppleShop.sol 파일 만들고
리액트 설치
npx create-react-app "이름"

migrations 폴더에 2_deploy_AppleShop.js 만들고

src에 hooks 폴더 만들고 useWeb3.js 만들기
web3 라이브러리 설치
경로 리액트로 이동해서
npm i web3

트러플 컴파일
경로 확인하고 (리액트 밖)
npx truffle compile

가나쉬 켜서 마이그레이션도
npx ganache-cli
npx truffle migration

다 됐으면
src에 contracts 폴더 만들고 컴파일된 AppleShop.json 복사 붙여넣기
src에 components 폴더 만들고 AppleShop.js 만들기

AppleShop.js컴포넌트 다 작성하고




*/

/*
temp

(0) 0x6fde69D3bc4b505ecB3929ef585dfdDfAD8A2E30 (100 ETH)
(1) 0x7a76F545823fD196e14e3ff0b89dd41708aB1A0b (100 ETH)
(2) 0x9Fb8bbA6aDAdFa94371CE23C3F5845adE9912079 (100 ETH)

Private Keys
(0) 0x65f87b19e96958bdd5eab1124001342376ad1ed6939cc3ae569031c700d72a1b
(1) 0xf78dbb26c8f80646f08c780f9261ff46719ff290fc9eff85eb7fd4e54cd4107f
(2) 0xbf5b07c0c1a5e528e2311197f988e15f58e372dedafcffcad9fec43465daf3b9
*/
