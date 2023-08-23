import React from 'react'
import { Divider, Drawer, Toolbar, makeStyles } from '@material-ui/core'
import Listas from './Listas'

const estilos = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width:240,
        flexShrink:0,}
    },
    drawerPaper: {
        width:240,
    }
}))

const Cajon = (props) => {

    const classes = estilos();

  return (

    <div>
    <Drawer className={classes.drawer} 
    classes={{paper: classes.drawerPaper}}
    anchor='left'
    variant={props.variant}
    open={props.open}
    onClose={props.onClose ? props.onClose : null}
    >
    <Toolbar/>
    <Divider/>
    <Listas/>
    </Drawer>
    </div>
  )
}

export default Cajon