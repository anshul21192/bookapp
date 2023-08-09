import "../trade/trade.css";
import * as React from 'react';
import TradeSearch from './component/trade-search';
import TradeCard from './component/trade-card';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getTradeData } from "../api";

function Trade(){
    const [tradeInfo,setTradeInfo] = useState([]);
    const id = useParams();

    let data= tradeInfo;
    let bookID=id?.bookname;
    function createElement(item){
        return <TradeCard {...item}></TradeCard>
    }

    const getTradeInfo= async ()=>{
        const data = await getTradeData(id.bookname);
        setTradeInfo(data);
    }

    useEffect(()=>{
        getTradeInfo();
    })


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