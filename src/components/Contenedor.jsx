import React from 'react'
import { Toolbar, makeStyles } from '@material-ui/core'
import NavBar from './NavBar';
import Cajon from './Cajon';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const Contenedor = () => {
    const classes = estilos();

    return (
        <div className={classes.root}>
            <NavBar />
            <Cajon/>
            <div className={classes.content}>
                <Toolbar />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis quaerat eaque ad modi unde ex incidunt quos quidem, fugit inventore optio dolorem aut ipsa sapiente soluta explicabo vitae quia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis quaerat eaque ad modi unde ex incidunt quos quidem, fugit inventore optio dolorem aut ipsa sapiente soluta explicabo vitae quia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis quaerat eaque ad modi unde ex incidunt quos quidem, fugit inventore optio dolorem aut ipsa sapiente soluta explicabo vitae quia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis quaerat eaque ad modi unde ex incidunt quos quidem, fugit inventore optio dolorem aut ipsa sapiente soluta explicabo vitae quia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis quaerat eaque ad modi unde ex incidunt quos quidem, fugit inventore optio dolorem aut ipsa sapiente soluta explicabo vitae quia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis quaerat eaque ad modi unde ex incidunt quos quidem, fugit inventore optio dolorem aut ipsa sapiente soluta explicabo vitae quia.
            </div>
        </div>
    )
}

export default Contenedor