import React, { useContext, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { SearchContext } from './SearchContext'
import { MovieCard } from './MovieCard.js'
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  root: {
    display: 'flex'
  }
}))

const Nominees = () => {
  let movieParam = useContext(SearchContext)
  const classes = useStyles();
  const [instructions, setInstructions] = useState(true)
  useEffect(() => {
    let noNominees = true
    Object.keys(movieParam.nominees).forEach((current) => {
      if (movieParam.nominees[current]) noNominees = false
    })
    if (noNominees) setInstructions(true)
    else setInstructions(false)
  }, [movieParam.nominees])
  console.log()
  return (
    <div className={classes.heroContent}>
      <Container classes={{
        root: classes.root
      }} maxWidth="sm">
        {instructions ?
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Your nominee list is empty! Use the search bar above to find and add a film you think should be up for nomination. They'll be displayed here.
        </Typography>
          :
          Object.keys(movieParam.nominees).map(
            (current) => {
              if (movieParam.nominees[current]) {
                console.log(current)
                return (<MovieCard key={current.imdbID} movie={movieParam.nominees[current]}
                  inNominee={true}
                  buttonMsg={'Remove'} />)
              }
            })}
      </Container>
    </div>
  )
}

export default Nominees
