import React from "react";
import Stock from "./Stock";

function StockContainer({ allStocks, handleBuy, bought, typeFilter }) {
  const itemsToDisplay = allStocks.filter((stock) => stock.type === typeFilter)


  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {itemsToDisplay.map((stock) => (
        <Stock 
          handleBuy={handleBuy}
          bought = {bought}
          key={stock.id} 
          id = {stock.id}
          ticker={stock.ticker} 
          name ={stock.name}
          type = {stock.type}
          price = {stock.price}
        />
      ))}
    </div>
  );
}

export default StockContainer;
