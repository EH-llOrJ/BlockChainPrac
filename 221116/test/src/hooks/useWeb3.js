import { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";
// web3 라이브러리는 nodejs에서 사용하는 라이브러리 기능들이 있어서
// 사용할 최소의 기능만 사용하기 위해 프론트에서 web3.min.js만 가지고 온다.

const useWeb3 = () => {
  // 상태 변수로 주소 추가
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  const getChainId = async () => {
    // 현재 메타마스케엇 사용하고 있는 체인의 아이디를 반환할 함수
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    return chainId;
  };

  const getRequestAccounts = async () => {
    // 연결이 되어있는지 보고 메타마스크 계정들과 연결 요청
    // 연결이 되어있으면 메타마스크가 갖고 있는 계정들 중 사용하고 있는 계정 반환
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("accounts: ", accounts);
    return accounts;
  };

  const addNetWork = async (_chainId) => {
    // 메타마스크 네트워크를 추가할 때 필요한 속성들
    const netWork = {
      chainId: _chainId,
      chainName: "Ganache",
      rpcUrls: ["http://127.0.0.1:8545"],
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH", // 통화 단위
        decimal: 18, // 소수점 자리 수
      },
    };

    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [netWork],
    });
  };

  useEffect(() => {
    const init = async () => {
      try {
        const targetChainid = "0x539"; // 체인아이디: 콘솔로그 나온 거에 갖고 옴
        const chainId = await getChainId(); // "1337 hex 0x1e2a"
        console.log("체인 아이디 : ", chainId);
        if (targetChainid != chainId) {
          // 네트워크를 추가해준다.
          addNetWork(targetChainid);
        }
        const [accounts] = await getRequestAccounts();
        // web3 라이브러리 사용해서 메타마스크에 연결
        const web3 = new Web3(window.ethereum);

        setAccount(accounts);
        setWeb3(web3);
      } catch (e) {
        console.log(e);
      }
    };
    if (window.ethereum) {
      init();
    }
  }, []);

  return [account, web3];
};
// useWeb3라는 커스텀 훅을 만든 것이다.
// useEffect나 useState처럼 커스텀 훅을 만들어서 사용하는 것
export default useWeb3;
