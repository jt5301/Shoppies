import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SearchContext } from './SearchContext'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    height: '600px',
    overflow: 'scroll'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  added: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '10px',
  }
}))

export const MovieCard = (props) => {
  const classes = useStyles();
  const movie = props.movie
  const [nominated, setNominated] = useState(false)
  let searchParam = useContext(SearchContext)
  const addToNominee = () => {
    searchParam.setNominee({ ...searchParam.nominees, [movie.imdbID]: movie })
  }
  useEffect(() => {
    if (searchParam.nominees[movie.imdbID]) {
      setNominated(true)
    }
    else setNominated(false)
  }, [searchParam.nominees])
  return (
    <Grid item key={movie.imdbID} xs={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={movie.Poster}
          title={movie.Title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title}
          </Typography>
          <Typography>
            {movie.Year}
          </Typography>
        </CardContent>
        {nominated ?
          <div className={classes.added}>
            Added!
        </div>
          : <CardActions
            onClick={(event) => addToNominee(event)}
            classes={{
              root: classes.root
            }}>
            <Button size="small" color="primary">
              Add Movie
            </Button>
          </CardActions>}
      </Card>
    </Grid >
  )
}
