import Navbar from "../navbar/navbar"
import View from "../view/view";

import '../dashboard/dashboard.css';
import { useParams} from "react-router-dom";
import { useEffect } from "react";
import { getBookData } from "../api";

function Dashboard(){

    const id=useParams();

    const getBookInfo= async ()=>{
         const data = await getBookData(id.user);
         console.log(data);
    }

    useEffect(()=>{
        getBookInfo();
    });


    return <div className="dashboard" > 
        <Navbar/>
        <View />
    </div>
}

export default Dashboard;