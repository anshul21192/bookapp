import "../trade.css";
import * as React from 'react';
function TradeSearch(props){

  const arr=[

    {
      "id": 1,
      "name": "trade_name",
      "quantity": 500,
      "status": "Matured",
      "price": 100.0,
      "buySell": "250",
      "tradeDate": null,
      "settlementDate": null,
      "security": {
          "name": "secuurity_1",
          "isin": null,
          "cusip": null,
          "issuer": null,
          "maturityDate": null,
          "coupon": null,
          "type": null,
          "faceValue": null,
          "status": null,
          "id": 1
      }
  },
  {
    "id": 1,
    "name": "trade_name",
    "quantity": 500,
    "status": "Matured",
    "price": 100.0,
    "buySell": "250",
    "tradeDate": null,
    "settlementDate": null,
    "security": {
        "name": "secuurity_1",
        "isin": null,
        "cusip": null,
        "issuer": null,
        "maturityDate": null,
        "coupon": null,
        "type": null,
        "faceValue": null,
        "status": null,
        "id": 1
    }
},
{
  "id": 1,
  "name": "trade_name",
  "quantity": 500,
  "status": "Matured",
  "price": 100.0,
  "buySell": "250",
  "tradeDate": null,
  "settlementDate": null,
  "security": {
      "name": "secuurity_1",
      "isin": null,
      "cusip": null,
      "issuer": null,
      "maturityDate": null,
      "coupon": null,
      "type": null,
      "faceValue": null,
      "status": null,
      "id": 1
  }
}
  ]

    return    <div className="search_bar">
        <input type="search" placeholder="Search Trade here..." />
        <div>
        <select name="" id="security" onClick={(e)=>props.chageq(e.target.value)} >
            {props.data.map((e)=>{
              if('all'===props.currentStatus){
                return <option value={e.security.name} >{e.security.name}</option>;
              }
              else if(props.currentStatus===e.status){
                return <option value={e.security.name} >{e.security.name}</option>;
              }
            })}
        </select>

        </div>
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