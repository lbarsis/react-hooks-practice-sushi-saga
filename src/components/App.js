import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushis => setSushis(sushis))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} setMoney={setMoney} money={money}/>
      <Table money={money}/>
    </div>
  );
}

export default App;
