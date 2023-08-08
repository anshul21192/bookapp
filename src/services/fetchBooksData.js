/* eslint-disable no-unused-vars */
import { hostNameUrl } from "../config/api";
import axios from "axios";

async function findBooksByUser(){
    const bookList= axios.get('${hostNameUrl}/findBooksByUsers');
    console.log(bookList.data.data)
    return bookList;

}

function findBooksByID(){
    const bookList=axios.get('${hostNameUrl}/findBooksByID');
    return bookList;

}


function findBooksByCategory(type){
    const bookList=axios.get('${hostNameUrl}/findBooksByCategory-'+"type");
    return bookList;

}
export {findBooksByUser,findBooksByID,findBooksByCategory};