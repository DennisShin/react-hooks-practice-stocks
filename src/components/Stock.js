import React from "react";

function Stock({ ticker, name, type, price, id, handleBuy, bought, handleSell}) {

  return (

    <div>
      <div className="card">
        <div id={id} className="card-body">
          <h5 onClick={bought ? handleSell : handleBuy} className="card-title">{name}</h5>
          <p id="ticker" className="card-text">{ticker} : {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
