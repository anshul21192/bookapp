import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../card/bookcard.css';

function BookCard({...item}){
    const navigate = useNavigate();
    let companyName=item.companyName;
    let tradeCnt=item.tradeCnt;
    const openTrades=()=>{
        navigate('/book');
    }

    return <div className="bookcard" key={tradeCnt} onClick={openTrades} > 
            <Grid>
                Company Name:   <strong>{companyName}</strong>
            </Grid>
            <Grid> 
                No. of trades:   <strong>{tradeCnt} </strong>
            </Grid>
    </div>
}


export default BookCard;