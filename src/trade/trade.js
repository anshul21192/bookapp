import "../trade/trade.css";
import * as React from 'react';
import TradeSearch from './component/trade-search';
import TradeCard from './component/trade-card';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getTradeData } from "../api";

function Trade(){
    const [tradeInfo,setTradeInfo] = useState([]);
    const [currentStatus,setCurrrentStatus] = useState('all');
    const id = useParams();

    let data= tradeInfo;
    let bookID=id?.bookname;

    const chageq=(data)=>{
        setCurrrentStatus(data || 'all');
    }

    function createElement(item){
        return <TradeCard {...item}></TradeCard>
    }

    const getTradeInfo= async ()=>{
        const data = await getTradeData(id.bookname);
        const arr = data.filter((ele)=>{
            if(currentStatus==='all'){
                return ele;
            }
            else if(currentStatus===ele.status){
                return ele;
            }
        })
        setTradeInfo(arr);
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
                <TradeSearch chageq={chageq} currentStatus={currentStatus} data={data} ></TradeSearch>
                {
                    data.map(createElement)
                }
            </div>
        </section>
    </div>
    </>
};

export default Trade;