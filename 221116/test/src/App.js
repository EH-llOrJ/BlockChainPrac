import "./App.css";
import { useEffect, useState } from "react";
import useWeb3 from "./hooks/useWeb3";

function App() {
  const [account, web3] = useWeb3();
  const [isLogin, setIsLogin] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await web3.eth.sendTransaction({
      from: account,
      to: e.target.recived.value,
      value: web3.utils.toWei(e.target.amount.value, "ether"),
    });
  };

  useEffect(() => {
    const init = async () => {
      const balance = await web3?.eth.getBalance(account);
      setBalance(balance / 10 ** 10);
    };
    if (account) setIsLogin(true);
    init();
  }, [account]);
  if (!isLogin) return <div>메타마스크 로그인 해주세요</div>;

  return (
    <div className="App">
      <div>
        <h1>사용자 : {account}</h1>
        <div>남은 금액 : {balance}</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>받을 계정</label>
          <input id="recived" type="text" />
          <br />
          <label>보낼 금액</label>
          <input id="amount" type="number" />
          <br />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
}

export default App;
