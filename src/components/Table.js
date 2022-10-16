import React, { useState } from "react";

function Table({ money}) {
  const [plates, setPlates] = useState([])
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((index) => {
    return setPlates([...plates, <div key={index} className="empty-plate" style={{ top: -7 * 1}} />])    
  }
  );

  console.log(emptyPlates)

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
