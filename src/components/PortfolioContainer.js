import React from "react";
import Stock from "./Stock";


function PortfolioContainer({portfolioStocks, handleSell, bought}) {
  const boughtFalse = !bought
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        portfolioStocks.map((stock) => (
          <Stock 
          handleSell = {handleSell}
          bought={boughtFalse}
          key={stock.id} 
          id = {stock.id}
          ticker={stock.ticker} 
          name ={stock.name}
          type = {stock.type}
          price = {stock.price}
        />
        ))
      }
    
    </div>
  );
}

export default PortfolioContainer;
