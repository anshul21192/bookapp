import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../trade/trade.css";
import * as React from 'react';
import TradeSearch from './component/trade-search';
import TradeType from './component/trade-type';
import TradeCard from './component/trade-card';


function Trade(){
    let data={
        'type':"BUY",
        'status':'FAILED'
    }
    return <>
    <div className="container">
        <section className="main">
            <div className="main-top">
                <h1>Trade List!</h1>
            </div>
            <div className="main-body">
                <TradeSearch></TradeSearch>
                <TradeCard type={"BUY"} status={"UN-MATURED"}></TradeCard>
                <TradeCard type={"SELL"} status={"MATURED"}></TradeCard>
                <TradeCard type={"SELL"} status={"FAILED"}></TradeCard>
                <TradeCard type={"BUY"} status={"MATURED"}></TradeCard>
                <TradeCard type={"BUY"} status={"UN-MATURED"}></TradeCard>
                <TradeCard type={"SELL"} status={"FAILED"}></TradeCard>
            </div>
        </section>
    </div>
    </>
};

export default Trade;