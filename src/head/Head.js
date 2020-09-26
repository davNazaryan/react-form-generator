import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from '@material-ui/core';

// eslint-disable-next-line react/prop-types
export default ({ title, children }) => (
  <>
    <CssBaseline />
    <AppBar>
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Container>
      {children}
    </Container>
  </>
);
