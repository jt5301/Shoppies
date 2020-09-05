import React, { useContext, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { SearchContext } from './SearchContext'
import axios from 'axios'
import { MovieCard } from './MovieCard.js'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    height: '600px',
    overflow: 'scroll'
  },
}))

const MovieDisplay = () => {
  const classes = useStyles();
  let searchParam = useContext(SearchContext)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    let formattedQuery = ''
    for (let i = 0; i < searchParam.searchTerm.length; i++) {
      if (searchParam.searchTerm[i] === ' ') formattedQuery += '+'
      else formattedQuery += searchParam.searchTerm[i]
    }
    const getMovies = async () => {
      try {
        const res = await axios.get(`/movies/search/${formattedQuery}`)
        setMovies([...res.data.Search])
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [searchParam])
  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={5}>
        {movies.map((current) => {
          return (<MovieCard key={current.imdbID} movie={current} buttonMsg={'add'} />)
        })}
      </Grid>
    </Container>
  )
}

export default MovieDisplay
