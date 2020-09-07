import React, { useContext, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { SearchContext } from './SearchContext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

}))

const NavbarSearch = () => {
  const classes = useStyles()
  let searchTerm = useContext(SearchContext)
  const [search, setSearch] = useState('')
  const submitSearch = (event) => {
    event.preventDefault()
    searchTerm.setSearchTerm(search)
  }
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <form onSubmit={(event) => { submitSearch(event) }}><input onChange={(event) => setSearch(event.target.value)}></input></form>
        </Typography>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          The Shoppies
      </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarSearch
