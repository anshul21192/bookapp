import * as React from "react";
import "../trade.css";
function TradeType({buy_sell}){
    if(buy_sell ==="SELL")
        return <div className="img" style={{"textAlign":"center","backgroundColor":"red","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>RED</span>
            </div>
    else
        return  <div className="img" style={{"textAlign":"center","backgroundColor":"green","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>BUY</span>
            </div>
}
export default TradeType;