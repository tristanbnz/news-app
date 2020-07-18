import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
      maxWidth: 400,
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
                    variant="subtitle1"
                    >
                        {props.title}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" color="primary" href={props.url}>
                Go To Article
                </Button>
                </CardActions>
            </Card>
            </div>
    )
}

export default ArticleCard