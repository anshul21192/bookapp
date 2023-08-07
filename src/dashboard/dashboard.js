import Navbar from "../navbar/navbar"
import View from "../view/view";

import '../dashboard/dashboard.css';

function Dashboard(){
    return <div className="dashboard" > 
        <Navbar/>
        <View />
    </div>
}

export default Dashboard;