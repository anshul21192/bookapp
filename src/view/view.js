import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { BsSearch } from 'react-icons/bs';
import '../view/view.css';
import BookCard from "../card/bookcard";
import tempData from '../temp2.json'; 
function View(){

    const arr=tempData.data;
    function createElement(item){
        return <BookCard {...item}></BookCard>
    }
    return <Container className="view" >
        <Grid className="search-filter">
            <Grid className="filter">
                

            <FormControl fullWidth className="filterOption">
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Filter"
                // onChange={handleChange}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={20}>Mature</MenuItem>
                <MenuItem value={30}>Unmature</MenuItem>
                <MenuItem value={30}>Failed</MenuItem>
            </Select>
            </FormControl>



            </Grid>
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