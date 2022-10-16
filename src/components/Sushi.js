import React, {useState} from "react";

function Sushi({sushi, setMoney, money}) {
  const [isEaten, setIsEaten] = useState(false)
  const [isChargedMoney, setIsChargedMoney] = useState(false)

  function handleEatenSushi(){
    if (money < sushi.price) {
      setMoney(money => money)
    } else {
      setIsChargedMoney(true)
      setIsEaten(() => true)
      isChargedMoney ? setMoney(money => money) : setMoney(money => money - sushi.price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.image}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
