import { Button, Container,  Grid, TextField } from "@mui/material";
import { BsSearch } from 'react-icons/bs';
import '../view/view.css';
import BookCard from "../card/bookcard";
function View({bookList}){

    const arr=bookList;
    function createElement(item){
        return <BookCard {...item}></BookCard>
    }
    return <Container className="view" >
        <Grid className="search-filter">
            <Grid></Grid>
            <Grid className="search">
            <TextField id="filled-basic" label="Search Title" variant="filled" />
            <Button className="searchButton" variant="contained"><BsSearch></BsSearch></Button>
            
            </Grid>
        </Grid>
        <Grid className="list">
            {
                arr.map(createElement)
            }
        </Grid>
    </Container>
}

export default View;