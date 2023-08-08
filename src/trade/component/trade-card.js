import * as React from "react";
import TradeType from "./trade-type";
import "../trade.css";  
import TradeStatus from "./trade-status";
function TradeCard({...item}){
    let id=item.id;
    let counterPartyID=item.CounterpartyID || "db";
    let securityID=item.SecurityID || "abc123";
    let quantity=item.quantity;
    let status=item.status;
    let price=item.price;
    let buy_sell=item.buySell;
    let tradeDate=item.tradeDate;
    let settleDate=item.settlementDate;
    // console.log(id);
    return  <div className="job_card">
                <div className="job_details">
                    <TradeStatus status={status}></TradeStatus>
                    <div className="text">
                        <h1>Trade ID: {id}</h1>
                        <span>Counter Party: {counterPartyID}</span>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>Price: ${price}</h4>
                    <p>Quantity: {quantity}</p>
                    <p>Trade Date: {tradeDate}</p>
                    <p>Settlement Date:{settleDate}</p>
                    <p>Security ID: {securityID}</p>
                    <TradeType buy_sell={buy_sell}></TradeType>
                </div>
            </div>
}
export default TradeCard;