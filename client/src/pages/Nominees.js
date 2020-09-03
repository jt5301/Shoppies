import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

const Nominees = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          The Shoppies
      </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Your nominee list is empty! Use the search bar above to find and add a film you think should be up for nomination. They'll be displayed here.
      </Typography>
      </Container>
    </div>
  )
}

export default Nominees
