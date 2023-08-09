import "../trade.css";
import * as React from 'react';
function TradeSearch(props){

    return    <div className="search_bar">
        <input type="search" placeholder="Search Trade here..." />
       <div>
        <span>Select Type of Trade</span>
        <select name="" id="tradeStatus" onClick={(e)=>props.chageq(e.target.value)} >
          <option value={'all'} >All</option>
          <option value={"Matured"}  >Matured</option>
          <option value={"UnMatured"} >Un-Matured</option>
          <option value={"Failed"}>Failed</option>
          <option value={"Success"}>Success</option>
        </select>
       </div>
      </div>
}

export default TradeSearch;