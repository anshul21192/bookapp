import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { BsSearch } from 'react-icons/bs';

import '../view/view.css';
import BookCard from "../card/bookcard";

function View(){

    const arr=[{companyName:1,trades:1},
        {companyName:2,trades:11},
        {companyName:3,trades:12},
        {companyName:4,trades:6},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},
        {companyName:5,trades:1},

    ]


    return <Container className="view" >
        <Grid className="search-filter">
            <Grid className="filter">
                

            <FormControl fullWidth className="filterOption">
            <InputLabel id="demo-simple-select-label">filter</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Filter"
                // onChange={handleChange}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={20}>Mature</MenuItem>
                <MenuItem value={30}>fail</MenuItem>
                <MenuItem value={30}>third</MenuItem>
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
                arr.map((ele,idx) => {
                    console.log(idx)
                    return <BookCard data={ele} keys={idx}></BookCard>
                })
            }
        </Grid>
    </Container>
}

export default View;