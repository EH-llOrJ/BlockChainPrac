import { BlockChain } from "@core/index";
import { P2PServer } from "@core/server/p2p";
import express from "express";
import { json } from "stream/consumers";

const app = express();
const ws = new P2PServer();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("bit-chain");
});

// 블록 내용 조회
app.get("/chains", (req, res) => {
  res.json(ws.getChain());
});

// 블록 채굴
app.post("/mineBlock", (req, res) => {
  const { data } = req.body;
  const newBlock = ws.addBlock(data);
  if (newBlock.isError) return res.send(newBlock.value);
  res.json(newBlock.value);
});

// P2PServer 웹소켓 연결 요청
app.post("/addToPeer", (req, res) => {
  const { peer } = req.body;
  ws.connectToPeer(peer);
});

// 연결된 socket 조회
app.get("/peer", (req, res) => {
  const sockets = ws.getSockets().map((socket: any) => socket);
  res.send(sockets);
});

app.listen(8000, () => {
  console.log("열림");
  ws.listen();
});

// ts-node : 타입스크립트 node 환경 실행
