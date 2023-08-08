import * as React from "react";

function TradeStatus({status}){
    let tradeStatus=status;
    // eslint-disable-next-line default-case
    switch(tradeStatus){
        case "MATURED":
            return <div className="img" style={{"backgroundColor":"orange","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Matured</span>
            </div>;
        case "FAILED":
            return <div className="img" style={{"backgroundColor":"red","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Failed</span>
            </div>;
        case "UN-MATURED":
            return <div className="img" style={{"backgroundColor":"violet","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Unmatured</span>
            </div>;
    }
}
export default TradeStatus;