import * as React from "react";
import TradeType from "./trade-type";
import "../trade.css";  
import TradeStatus from "./trade-status";
function TradeCard({type,status}){
    return  <div className="job_card">
                <div className="job_details">
                    <TradeStatus status={status}></TradeStatus>
                    <div className="text">
                        <h1>Trade ID: 123-xycz</h1>
                        <span>Counter Party: DB</span>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>Price: $400</h4>
                    <p>Quantity: 43</p>
                    <p>Trade Date: 12/08/2023</p>
                    <p>Settlement Date: 13/08/2023</p>
                    <TradeType type={type}></TradeType>
                </div>
            </div>
}
export default TradeCard;