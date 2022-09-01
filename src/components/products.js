import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  const classes = useStyles();

  return (
    <div>
      {props.products.map((prod) => {
        return (
          <Card className={classes.root} key={prod.name}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`https://source.unsplash.com/random?${prod.name}&width=400`}
                title={prod.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {prod.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {prod.inStock} left
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

const stateToProps = (state) => {
  return state;
};

export default connect(stateToProps)(Products);