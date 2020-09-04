import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nominees from './Nominees.js'
import NavbarSearch from './NavbarSearch.js'
import MovieDisplay from './MovieDisplay.js'

export default function Landing() {

  return (
    <React.Fragment>
      <CssBaseline />
      <NavbarSearch />
      <Nominees />
      <MovieDisplay />
    </React.Fragment>
  );
}
