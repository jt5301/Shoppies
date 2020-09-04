import React from 'react'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

const NavbarSearch = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <input></input>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarSearch
