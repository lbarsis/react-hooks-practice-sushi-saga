import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, setMoney, money, setIsEaten, isEaten }) {
  const [sushiIndex, setSushiIndex] = useState([0, 3])

  function moreSushiClick() {
    if (sushiIndex[1] > sushis.length) {
      setSushiIndex([0, 3])
    } else {
      setSushiIndex(sushiIndex => [sushiIndex[0] + 4, sushiIndex[1] + 4])
    }
  }

  const displaySushis = sushis.filter(sushi => (sushis.indexOf(sushi) >= sushiIndex[0]) && (sushis.indexOf(sushi) <= sushiIndex[1])).map(sushi => {
    return <Sushi
      key={sushi.id}
      sushi={sushi}
      setMoney={setMoney}
      money={money}
      setIsEaten={setIsEaten}
      isEaten={isEaten}
    />
  })

  return (
    <div className="belt">
      {displaySushis}
      <MoreButton onHandleMoreSushi={moreSushiClick} />
    </div>
  );
}

export default SushiContainer;
