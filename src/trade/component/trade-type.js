import * as React from "react";
import "../trade.css";
function TradeType(props){
    console.log(props.tradeType)
    if(props.tradeType ==="SELL")
        return <div className="img" style={{"backgroundColor":"red","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>RED</span>
            </div>
    else
        return  <div className="img" style={{"text-align":"center","backgroundColor":"green","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>BUY</span>
            </div>
}
export default TradeType;