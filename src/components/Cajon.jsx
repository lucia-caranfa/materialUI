import React from 'react'
import { Divider, Drawer, Toolbar, makeStyles } from '@material-ui/core'
import Listas from './Listas'

const estilos = makeStyles(theme => ({
    drawer: {
        width:240,
        flexShrink:0,
    },
    drawerPaper: {
        width:240,
    }
}))

const Cajon = () => {

    const classes = estilos();

  return (

    <div>
    <Drawer className={classes.drawer} 
    variant='permanent'
    classes={{paper: classes.drawerPaper}}
    anchor='left'
    >
    <Toolbar/>
    <Divider/>
    <Listas/>
    </Drawer>
    </div>
  )
}

export default Cajon