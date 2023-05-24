import MyComp from "./MyComp";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const SOCKET_URL = "wss://fstream.binance.com/stream";
  const [data, setData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  useEffect(() => {
    const socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => {
      console.log("socket is open");
      const request = {
        method: "SUBSCRIBE",
        params: ["!ticker@arr"],
      };
      socket.send(JSON.stringify(request));
    };
    socket.onmessage = (data) => {
      setData(JSON.parse(data.data));
    };
  }, []);

  return (
    <div className="App">
      <div className={"wrapper"}>
        {data.data?.map((data) => {
          console.log("fucking Data", data);
          return <MyComp s={data?.s} P={data?.P} c={data?.c} C={data?.C} />;
        })}
        <div style={{ background: "white", width: "100%" }} ref={ref} />
      </div>
    </div>
  );
}

export default App;
