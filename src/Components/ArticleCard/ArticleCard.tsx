import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface IArticleCardProps {
    title: string;
    description: string;
    source: string;
    url: string;
    imageURL: string;
}

const useStyles = makeStyles({
    outerDiv: {
        margin: 20,
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function ArticleCard(props: IArticleCardProps) {

    const classes = useStyles();

    return(
        <div className={classes.outerDiv}>
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={props.imageURL}
                title={props.title}
                />
                <CardContent>
                    <Typography 
                    variant="h5"
                    component="h5">
                        {props.title}
                    </Typography>
                </CardContent>
            </Card>
            </div>
    )
}

export default ArticleCard