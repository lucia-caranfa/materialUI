import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Hidden, makeStyles } from "@material-ui/core";
import useMediaQuery from '@mui/material/useMediaQuery';
import { withWidth } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
        classButton1: {
            color: 'red'
        },
        classButton2: {
            color: 'purple'
        },
        classButton3: {
            color: 'blue'
        }
}));

const Ocultar = (props) => {

    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

  return (
    <div>
  <Typography variant="h6" color="initial">
    ancho: {props.width} 
  </Typography>

<Hidden xsDown>
  <Button variant="contained" className={classes.classButton1}>
    Llego hasta SM
  </Button>
  </Hidden>

  <Hidden smUp>
  <Button variant="contained" className={classes.classButton2}>
    Soy menos que SM
  </Button>
  </Hidden>
  
  <Hidden only='sm'>
  <Button variant="contained" className={classes.classButton3}>
    Me oculto en SM
  </Button>
  </Hidden>

  <span>{`(min-width:600px) matches: ${matches}`}</span>;
  
    </div>
  )
}

export default withWidth () (Ocultar)