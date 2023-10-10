import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [allStocks, setAllStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const bought = false;
  const [typeFilter, setTypeFilter] = useState("Tech")

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setAllStocks(data))
  }, [])

  function handleBuy(e){
    // console.log(e.target.parentNode.id)
    // setPortfolioStocks()

      fetch("http://localhost:3001/stocks/" + e.target.parentNode.id)
      .then(res => res.json())
      .then(data => (
        setPortfolioStocks(portfolioStocks.concat(data)))
        )
  }

  function handleSell(e) {
    e.target.parentNode.parentNode.remove()

  }

  function changeFilterValue(e){
    setTypeFilter(e.target.value)
  }

  return (
    <div>
      <SearchBar changeFilterValue={changeFilterValue}/>
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks={allStocks} handleBuy={handleBuy} bought={bought} typeFilter={typeFilter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} handleSell={handleSell} bought={bought}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
