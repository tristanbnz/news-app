import React from 'react';
import './SearchBar.css';
import { useState } from 'react';
import { Button, Grid, TextField, Select, Container, MenuItem, InputLabel } from '@material-ui/core';
import ISearchParameters from '../../Common/interfaces'

interface ISearchBarProps{
    SetNewsSearch: (a: ISearchParameters) => void;
}


function SearchBar(props: ISearchBarProps) {

    //Name of the state, method name to set the state, initial state
    const [NewsSearchTerm, setNewsSearchTerm] = useState<string | null>();
    const handleNewsSearchTermChange = (s: string | null) =>{
        
        let search: ISearchParameters = {
            SearchString: String(s) || '',
            Country: NewsCountryFilter || 'nz'
        }

        props.SetNewsSearch(search);

        setNewsSearchTerm(s);          
    }

    const [NewsCountryFilter, setNewsCountryFilter] = useState<string | null>();
    const handleNewsCountryFilterChange = (s: unknown) =>{

        let search: ISearchParameters = {
            SearchString: NewsSearchTerm || '',
            Country: String(s) || 'nz'
        }

        props.SetNewsSearch(search);
        setNewsCountryFilter(String(s) || 'nz');          
    }
    
    return(
        <div className="searchGrid">
            <Container>
            <Grid container spacing={2} justify="center" alignItems="flex-end">
                <Grid item xs={3}>
                    <TextField 
                    fullWidth 
                    id="standard-basic" 
                    label="Search news articles" 
                    defaultValue="" 
                    size="medium"
                    
                    onChange={e => handleNewsSearchTermChange(e.target.value)} 
                    />
                    
                </Grid>
                <Grid item xs={3}>
                    <InputLabel>Filter by Country</InputLabel>
                    <Select 
                        fullWidth 
                        value={NewsCountryFilter}
                        defaultValue="nz"
                        onChange={e => handleNewsCountryFilterChange(e.target.value)}
                    >
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