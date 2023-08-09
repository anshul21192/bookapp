import "./security.css";
import * as React from 'react';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getTradeData } from "../api";
import SecurityCard from "./component/securityCard";
import SecuritySearch from "./component/securitySearch";
//temp 
import tempData from '../temp2.json';
function Security(){
    function createElement(item){
        return <SecurityCard {...item}></SecurityCard>
    }
    let data =tempData.data;
    return <>
    <div className="container">
        <section className="main">
            <div className="main-top">
                <h1>Secuirty List!</h1>
            </div>
            <div className="main-body">
                <SecuritySearch  ></SecuritySearch>
                {
                    data.map(createElement)
                }
            </div>
        </section>
    </div>
    </>
};

export default Security;