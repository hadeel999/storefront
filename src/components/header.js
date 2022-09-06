import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Badge, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcont from '@material-ui/icons/AddShoppingCartOutlined';
import StoreSharpIcon from '@material-ui/icons/StoreSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Header() {
  const state = useSelector((state) => state);
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <Button size="large" style={{ 'color': '#f1f1f1' }}>
                <StoreSharpIcon />
                Store Front
              </Button>
            </Link>
          </Typography>
          <Link to="/cart">
            <Button size="large" style={{ 'color': '#f1f1f1' }}>
              <StyledBadge badgeContent={state.cart.length} color="secondary">
                Cart
                <AddShoppingCartOutlinedIcont />
              </StyledBadge>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;