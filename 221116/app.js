/*
Go 설치
Go를 설치하는 이유
Geth를 빌드하는데 필요한 언어
go-ethereum 약자가 Geth
Go 언어로 만들어진 이더리움 클라이언트 소프트웨어다.

권한이 필요한 명령어를 사용할 때 sudo

윈도우 사용자는
우분투 환경 접속 cmd를 열고 wsl 입력
접속 종료는 exit

설치 명령어
sudo apt update
sudo apt install golang
sudo apt install -y libgmp3-dev tree make build-essential

go 버전 업데이트 명령어
git clone https://github.com/udhos/update-golang
cd update-golang
sudo ./update-golang.sh

geth를 받을 클론 폴더를 만들어서 git clone을 하자

설치
cd ~ 
폴더 이름을 Ethereum 만들어주자
mkdir Ethereum
cd Ethereum
git clone https://github.com/ethereum/go-ethereum

clone이 다 받아지면
cd go-ethereum
geth를 실행시켜주자
make geth

go 버전 업데이트
제거 하고
sudo add-apt-repository ppa:longsleep/golang-backports
업데이트
sudo apt update
업데이트 버전 설치
sudo apt install golang-go

빌드가 정상적으로 안됐으면 
디렉토리 삭제 후 다시 클론 받고 make geth

빌드된 경로로 이동해서
cd ./build/bin

geth 버전을 한 번 확인해보고
./geth version

geth실행 명령어
./geth

사용할 때마다 폴더 경로로 가서 실행하는게 귀찮으니
pc의 환경변수

/root/Ethereum/go-ethereum/build/bin

vi ~/.bash_profile
export PATH=$PATH:/root/Ethereum/go-ethereum/build/bin
작성 후

환경 변수 설정
source ~/.bash_profile

이러면 설정 된 거고 확인은 이제 bin경로 말고 어디서든
다른 경로로 이동해서 geth으로 확인

가나쉬 설치 명령어
sudo npm i -g ganache-cli
npm ganache-cli

실행 명령어
npx ganache-cli
(참고 컨트롤+C로 나온다)

가나쉬 로컬에서 이더리움 블록체인 가상 네트워크를 생성할 수 있게 해준다.
테스트를 할 수 있도록
가나쉬로 생성된 네트워크에서는
채굴 기능 없고 P2P기능도 없다.
블록 / 체인 / Tx와 관련된 기능만 있다.
1tx에 1개의 블록 생성
가나쉬로 트랜잭션을 발생시키면 실시간 확인이 가능해서 테스트에 용이하다.

오류 난다면
/usr/bin/env: ‘bash\r’: Permission denied
거부된 거니까
sudo apt install nodejs npm에서 노드 및 npm 설치 까지(이 방법으로)
혹은
일반 터미널에서 (wsl 나가서) npm i -g ganache-cli로 설치 가능

비트 코인과 이더리움의 차이가
특징은 이더리움의 가장 큰 특징 스마트 컨트랙트를 구현할 수 있다.
비트코인은 트랜잭션을 만들면 계정의 소유자가 다른 계정의 소유자에게 10 코인을 전송한다.
같은 거래를 주로 했는데

이더리움은 스마트 컨트랙트를 사용해서 기능 구현이 가능하다.
A -> B -> C의 물건을 구매하는 상황은
B에게 A가 상품의 금액을 받아서 C에게 받은 사실을 알려준다.
그러면 C가 상품을 A에게 주고 A가 상품을 확인하면 스마트 컨트랙트가 동작해서
B의 계정에서 C의 계정으로 코인을 보내준다.
스마트 컨트랙트는 거래에 대해 조건에 충족한 계약 형태의 거래를 가능하게 해준다.
코인을 받고 물건을 전달하는 거래뿐만이 아니라 조건에 따라 특정한 코드가 실행돼서
거래를 할 수 있게끔 추가 조건들을 기능으로 구현할 수 있다.
스마트 컨트랙트를 작성할 때 솔리디티를 사용해서 스마트 컨트랙트를 작성할 수 있다.

스마트 컨트랙트를 구현할 때 이더리움 EVM이라는 걸 사용하고,
Account, Transaction의 내용도 좀 다르다.

EVM이 뭐냐
이더리움 가상 머신의 약자 자바를 알면 JVM 이런 개념적인 비슷한 기능
스마트 컨트랙트를 실행할 때 분산 네트워크 환경에서 모든 노드들이 스마트 컨트랙트에 의해 특정한 결과를 얻어야 할 때 솔리디티 언어로 작성한 코드를 EVM을 통해서 실행시키게 한다.


1. 솔리디티로 컨트랙트 코드 작성
2. 바이트 코드로 컴파일
3. EVM에서 컴파일된 바이트 코드 실행

이더리움 스마트 컨트랙트라는 프로그램을 실행할 수 있는 플랫폼으로 기능할 수 있는 핵심은 EVM이라는 가상 컴퓨터가 있기 때문이다.
우리가 만든 규칙에 따라서 스마트 컨트랙트 코드를 실행하고
그 결과를 업데이트 해준다.

EVM은 가상 머신이고 정해진 스마트 컨트랙트 규칙에 따라서 코드를(계약) 실행하고 그 결과를 변한 상태를 업데이트 해준다.

Account
이더리움 네트워크에는 EOA, CA라는 두 종류의 계정이 존재하고

EOA라는 외부 소유 계정(Externally Owned Account)
개인키로 제어되는 계정으로 코드를 저장하지 않는다.
스마트 컨트랙트에 대한 접근을 제어한다.
EOA로 트랜잭션을 시작할 수 있다.
EOA는 다른 EOA 또는 CA에 메시지를 보낼 수 있으며 이 동작은 개인키를 사용해서
트랜잭션을 만들고 서명하고 두개의 EOA사이에서 발생하는 메시지는 단순히 ETH만을 전송
EOA에서 CA에 보내는 메시지는 CA에 저장된 코드를 활성화시킨다.
명령 EOA가 전송한 트랜잭션부터 시작된다고 보면 된다.

CA 계약 계정(Contract Account)
스마트 컨트랙트의 로직에서 제어를 하고 스마트 컨트랙트 코드를 저장할 수 있다.(코드의 해시)
개인키가 없고 스스로 트랜잭션을 시작할 수가 없다.
외부에서 트랜잭션에 대한 응답을 통해 트랜잭션을 실행할 수 있다.

CA는 EOA와 다른게 개인키를 가지고 있지 않고 스스로 트랜잭션을 생성할 수도 없다.
CA는 다른 CA 또는 EOA로부터 받은 트랜잭션에 대한 응답으로만 트랜잭션을 실행할 수 있다.

Transaction
이더리움 네트워크에서 트랜잭션은 EOA에 의해서 서명되고
속성들은
from: 보내는 계정
to: 받는 계정
nonce: 보내는 계정이 발생시킨 총 트랜잭션 횟수
value: 보내는 금액
gasLimit: 트랜잭션이 사용할 수 있는 가스의 최대치
gasPrice: 보내는 사람이 지불할 가스 가격
data: 트랜잭션에 담을 데이터
비트코인 네트워크와 다른 점이 이더리움 네트워크는 가스비(gas fee)라는 개념이 있고
가스는 이더리움 네트워크에서 트랜잭션을 생성할 때 보내는 사람이 부담하는 수수료의 개념

Web3 라이브러리를 사용하면 노드 간의 통신할 때
RPC라는 개념
RPC라는 개념이 나온 이유
분산 네트워크를 프로그래밍으로 쉽게 어떻게 해야할까.

일반적으로 통신 패턴은
서버를 켜고
클라이언트에서 서베에 데이터나 행동을 요청
서버는 그 데이터를 받고 요청받은 응답을 반환해주고
클라이언트는 서버로부터 응답값을 받아서 본인의 요청을 결과로 받을 수 있다.
http socket

RPC는 원격 프로시저 호출 별도의 원격 제어를 위한 코딩없이 다른 주소 공간에서
함수나 프로시저를 실행할 수 있게 프로세스 간 통신 기술
원격 프로시저를 호출하면 프로그래머가 함수를 실행 프로그램에 로컬 위치에
원격 위치에 있든 동일한 코드를 이용할 수 있다.

RPC개념 추가 https://velog.io/@jakeseo_me/RPC%EB%9E%80


함수는 input에 대한 output의 발생을 목적으로 하고
프로시저는 결과보다는 명령 단위가 수행하는 절차를 목적으로 한다.

가나쉬에서 curl를 사용해서 요청을 보내고 확인하는 법

curl은 client URL

클라이언트에서 소스코드를 손쉽게 웹 브라우저처럼 활용할 수 있게 해주는 기술
서버 통신할 수 있는 커맨드 명령어 툴이다. 웹개발에서 많이 사용되는 기술
장점은 다양한 프로토콜을 지원한다는 장점이 있다.

DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, SSL 등등

url을 가지고 할 수 있는 건 웬만하면 다 할 수 있다 라고 보면 된다.
HTTP 프로토콜을 사용해서 페이지의 데이터를 가져온다거나 파일을 다운 받을 수도 있다.
curl [-option] 페이지 주소 쓰면 페이지의 소스가 화면에 출력된다.

npx ganache-cli로 가나쉬 실행 시켜 놓고
curl -X POST -H "content-type:application/json" --data "{id : soon}" http://localhost:3000

-X 요청 메소드
-H 요청 헤더 내용
-data, -d 요청 바디 내용 작성

가나쉬로 생성한 이더리움 클라이언트에
curl을 사용해서 RPC 요청을 보내보자
request body의 내용
{
 "id" : 1215 // 체인의 아이디 , 있어도 되고 없어도 된다.
 "jsonrpc"  : "2.0"// json으로 인코딩한 프로시저 호출 // 필수
 "method" : "eth_accounts", // 이더리움 클라이언트에 구성되어 있는 메소드 명 필수
 "params" : [] // 메소도의 인자 값
}

계정을 가져오기
curl -X POST -H "content-type : application/json" --data '{"jsonrpc" : "2.0","method" : "eth_accounts"}' http://localhost:8545

curl -X POST -H "content-type : application/json" --data '{ "jsonrpc": "2.0", "method": "eth_accounts", "params": []}' http://localhost:8545

curl -X POST -H "content-type : application/json" --data "{\"jsonrpc\" : \"2.0\",\"method\" : \"eth_accounts\"}" http://localhost:8545

잔액 조회하기

잔액 조회하는 함수 이름은 "eth_getBalance"
"eth_getBalance" 함수는 params로 매개변수 2개를 전달하고
첫 번째에는 계정의 주소
두 번째는 몇 번째 블록을 조회할 것인지

curl -X POST -H "content-type : application/json" --data '{ "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0x3408d811bceeaf65b4a01ee2373a9cfdaec3904c","latest"] }' http://localhost:8545
// params엔 나온 result 중 아무거나

이더리움 클라이언트에게 RPC를 요청 보내는 방법이다.
Web3 라이브러리
Web3.js라는 라이브러리 제공 받아서 이더리움 네트워크와 상호작용을 할 수 있는 다양한 함수를 제공 받아 사용할 수 있다.
위에서 해본 RPC 요청을 쉽게 보낼 수 있게 해주는 라이브러리

npm init -y
npm i -D jest
npm i web3

package.json
"test": "jest" 로 변경
jest.config.js 파일 생성

*/