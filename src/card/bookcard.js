import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../card/bookcard.css';

function BookCard(props){

    const navigate = useNavigate();

    const openTrades=()=>{
        navigate('/book');
    }

    return <div className="bookcard" key={props.keys} onClick={openTrades} > 
            <Grid>
                Company Name:{props.data.companyName || "db"}
            </Grid>
            <Grid>
                No. of trades: {props.data.trades || 400} 
            </Grid>
    </div>
}


export default BookCard;