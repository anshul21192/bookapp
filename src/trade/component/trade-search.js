import "../trade.css";
import * as React from 'react';
function TradeSearch(props){
    return    <div className="search_bar">
        <input type="search" placeholder="Search Trade here..." />
       <div>
        <span>Select Type of Trade</span>
        <select name="" id="tradeStatus" onClick={(e)=>{props.setCurrentStatus(e.target.value)}}>
          <option value={'all'}>All</option>
          <option value={"matured"}>Matured</option>
          <option value={"unmature"}>Un-Matured</option>
          <option value={"failed"}>Failed</option>
        </select>
       </div>
      </div>
}

export default TradeSearch;