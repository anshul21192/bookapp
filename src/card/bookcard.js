import { Grid } from "@mui/material";
import '../card/bookcard.css';

function BookCard(props){


    return <div className="bookcard" key={props.keys} > 
            <Grid>
                Company Name:{props.data.companyName || "db"}
            </Grid>
            <Grid>
                No. of trades: {props.data.trades || 400} 
            </Grid>
    </div>
}


export default BookCard;