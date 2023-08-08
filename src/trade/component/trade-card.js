import * as React from "react";
import TradeType from "./trade-type";
import "../trade.css";  
import TradeStatus from "./trade-status";
function TradeCard({...item}){
    let id=item.ID;
    let counterPartyID=item.CounterpartyID;
    let securityID=item.SecurityID;
    let quantity=item.Quantity;
    let status=item.Status;
    let price=item.Price;
    let buy_sell=item.BUY_SELL;
    let tradeDate=item.TradeDate;
    let settleDate=item.SettlementDate;
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
                    <TradeType type={buy_sell}></TradeType>
                </div>
            </div>
}
export default TradeCard;