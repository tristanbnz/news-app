import React from 'react';
import './NewsArticles.css';
import { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard'
import { Button, Grid, TextField, Select, Container, MenuItem, InputLabel, makeStyles, CardMedia } from '@material-ui/core';

interface IState {
    title: any[];
    description: any[];
    source: any[];
    url: any[];
    urlToImage: any[];
}
interface INewsArticlesProps {
    SearchString: (string | null);
    Country: (string | null);
}


function NewsArticles(props: INewsArticlesProps) {

    const [ItemArray, setItemArray] = useState<IState[]>([{ 
        
        title: [], 
        description: [],
        source: [],
        url: [],
        urlToImage: [], 
    
    }]);

    //First arg = function to run
    //Second arg = function runs when these change
    var request = new Request('http://newsapi.org/v2/top-headlines?' +
    'country=' + props.Country + '&' +
    'q=' + props.SearchString + '&' +
    'apiKey=' + process.env.REACT_APP_API_KEY); 

    console.log(request.url);

    useEffect(() => {
        fetch(request)
            .then(response => response.json())
            .then(response => {
                console.log(response.articles);
                setItemArray(response.articles);
            })
            // .then(function(response) {
            //     console.log(response);
            // })
            .catch(() => console.log("Error with response")
            );

    }, [props.SearchString, props.Country]);    

    var Articles: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.title[0]) {
            return;
        }
        Articles.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3}>
                <ArticleCard imageURL={String(el.urlToImage)} title={String(el.title)} description={String(el.description)} source={String(el.source)} url={String(el.url)} />
            </Grid>)
    })

    return(

        <div>
            <Grid 
            container 
            spacing={1}
            justify="center"
            alignItems="center"
            >
                {Articles}
            </Grid>
        </div>
    )

}

export default NewsArticles