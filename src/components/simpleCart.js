import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { addToCart } from '../store/actions';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { green } from '@material-ui/core/colors';
import './products.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products() {
  const state = useSelector((state) => state);
  const dispatcher = useDispatch();
  const classes = useStyles();

  return (
    <div className="products">
      {state.products.map((prod) => {
        return (
          <div className="cards">
            <Card className={classes.root} key={prod.name}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  style={{ 'background-size': 'cover', 'background-position': 'center' }}
                  image={prod.img}
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
              <CardActions>
                <Button size="small" color="primary" onClick={() => dispatcher(addToCart(prod))}>
                  <AddShoppingCartOutlinedIcon style={{ color: green[500] }} />
                  Add
                </Button>
                {/* <Button size="small" color="primary">
              Learn More
              </Button> */}
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;