import Navbar from "../navbar/navbar"
import View from "../view/view";

import '../dashboard/dashboard.css';
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookData } from "../api";

function Dashboard(){

    const [bookList,setBookList]=useState([]);

    const id=useParams();

    const getBookInfo= async ()=>{
         const data = await getBookData(id.user);
         setBookList(data);
         console.log(data);
    }

    useEffect(()=>{
        getBookInfo();
    });

    // if(bookList.length!==0){
        return <div className="dashboard" > 
        <Navbar/>
        <View bookList={bookList} />
    </div>
    // }
    // else{
    //     return <h2>Loading......</h2>
    // }
}

export default Dashboard;