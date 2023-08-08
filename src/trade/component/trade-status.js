import * as React from "react";

function TradeStatus(){
    let tradeStatus="matured"
    // eslint-disable-next-line default-case
    switch(tradeStatus){
        case "matured":
            return <div className="img" style={{"backgroundColor":"orange","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Matured</span>
            </div>;
        case "failed":
            return <div className="img" style={{"backgroundColor":"red","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Failed</span>
            </div>;
        case "unmatured":
            return <div className="img" style={{"backgroundColor":"violet","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Unmatured</span>
            </div>;
    }
}
export default TradeStatus;