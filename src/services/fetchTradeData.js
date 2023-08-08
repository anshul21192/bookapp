import axios from "axios";
import { hostNameUrl } from "../config/api";


async function findTrade(){
    const tradeList=await axios.get('');
    console.log(tradeList);
    return tradeList;
}

function findTradeByCategory(type){
    const tradeList=axios.get('${hostNameUrl}/findTradeByID/type');
    return tradeList;
}
export {findTrade,findTradeByCategory};