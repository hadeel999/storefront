import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../store/actions';
import {
  Container,
  Button,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 300,
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ProductDetails() {
  const state = useSelector((state) => state.activeProduct);
  const dispatcher = useDispatch();
  const classes1 = useStyles();
  const classes2 = useStyles2();

  return (
    <div className="details">
      <Container maxWidth="sm" style={{ backgroundColor: '#fff' }}>
        <Typography align="center" gutterBottom variant="h3">
          {state.name}
        </Typography>

        <Card className={classes1.root} key={state.name}>
          <CardActionArea>
            <CardMedia
              className={classes1.media}
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              image={`https://source.unsplash.com/random?${state.name}`}
              title={state.name}
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="p">
                ${state.price}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1" component="p">
                In Stock: {state.inStock}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Button
          color="primary"
          variant="text"
          children="ADD TO CART"
          onClick={() => dispatcher(removeProduct(state))}
        />

        <Typography align="center" gutterBottom variant="h5">
          Product Details
        </Typography>
        <div className={classes2.root}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={classes2.heading}>Specs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{state.description ? state.description : 'No Details'}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;