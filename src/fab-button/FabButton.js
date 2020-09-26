import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, withStyles } from '@material-ui/core';

export default withStyles({
  root: {
    position: 'absolute',
    bottom: '25px',
    right: '25px',
    background: 'rgba(33, 203, 243) !important',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
})(({ children, classes, href }) => (
  <IconButton className={classes.root} component={Link} to={href}>
    {children}
  </IconButton>
));
