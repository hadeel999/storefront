import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              &copy; Hadeel 2022
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
}

export default Footer;