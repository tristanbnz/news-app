import React from 'react';
import './SearchBar.css';
import { useState } from 'react';
import { Button, Grid, TextField, Select, Container, MenuItem, InputLabel } from '@material-ui/core';



function SearchBar() {
    
    return(
        <div className="searchGrid">
            <Container>
            <Grid container spacing={2} justify="center" alignItems="flex-end">
                <Grid item xs={3}>
                    <TextField fullWidth id="standard-basic" label="Search news articles" defaultValue="" size="medium" />
                    
                </Grid>
                <Grid item xs={3}>
                    <InputLabel>Filter by Country</InputLabel>
                    <Select fullWidth>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="nz">New Zealand</MenuItem>
                        <MenuItem value="au">Australia</MenuItem>
                        <MenuItem value="us">United States</MenuItem>
                        <MenuItem value="gb">United Kingdom</MenuItem>
                    </Select>
                </Grid>
                

            </Grid>
            </Container>
        </div>
    )

}

export default SearchBar