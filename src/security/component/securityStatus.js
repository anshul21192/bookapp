import * as React from "react";

function SecurityStatus({status}){
    let tradeStatus=status;
    console.log(tradeStatus)
    // eslint-disable-next-line default-case
    switch(tradeStatus){
        case "Matured":
            return <div className="img" style={{"backgroundColor":"orange","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Matured</span>
            </div>;
        case "UnMatured":
            return <div className="img" style={{"backgroundColor":"violet","border":"solid 2px"}}>     
                <span style={{"padding":"5px","margin":"5px","color":"white"}}>Unmatured</span>
            </div>;
    }
}
export default SecurityStatus;