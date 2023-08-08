import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../card/bookcard.css';

function BookCard({...item}){
    const navigate = useNavigate();
    let companyName=item.name;
    let tradeCnt=item.trade.length;
    const openTrades=(name)=>{
        navigate(`/trade/${name}`);
    }

    return <div className="bookcard" key={tradeCnt} onClick={()=>{
        openTrades(companyName);
    }}  > 
            <Grid>
                Company Name:   <strong>{companyName}</strong>
            </Grid>
            <Grid> 
                No. of trades:   <strong>{tradeCnt} </strong>
            </Grid>
    </div>
}


export default BookCard;