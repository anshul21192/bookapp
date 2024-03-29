import * as React from "react";

function TradeStatus({status}){
    let tradeStatus=status;
    // eslint-disable-next-line default-case
    switch(tradeStatus){
        case "Matured":
            return <div className="img" style={{"backgroundColor":"orange","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Matured</span>
            </div>;
        case "Failed":
            return <div className="img" style={{"backgroundColor":"red","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Failed</span>
            </div>;
        case "UnMatured":
            return <div className="img" style={{"backgroundColor":"violet","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Unmatured</span>
            </div>;
    }
}
export default TradeStatus;