import "../trade/trade.css";
import * as React from 'react';
import TradeSearch from './component/trade-search';
import TradeCard from './component/trade-card';
import tempData from '../temp.json';

function Trade(){
    let data= tempData.data;
    let bookID=data[0].BookID;
    function createElement(item){
        return <TradeCard {...item}></TradeCard>
    }
    return <>
    <div className="container">
        <section className="main">
            <div className="main-top">
                <h1>BOOK ID:  {bookID}  | Trade List!</h1>
            </div>
            <div className="main-body">
                <TradeSearch></TradeSearch>
                {
                    data.map(createElement)
                }
            </div>
        </section>
    </div>
    </>
};

export default Trade;