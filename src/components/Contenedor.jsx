import React from 'react'
import { Hidden, Toolbar, makeStyles } from '@material-ui/core'
import NavBar from './NavBar';
import Cajon from './Cajon';
import Cajita from './Cajita';

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

    const [abrir,setAbrir] = React.useState(false)
    
    const accionAbrir = () => { setAbrir(!abrir)}

    return (
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir}/>
            <Hidden xsDown>
            <Cajon 
            variant ='permanent' 
            open = {true}
            />
            </Hidden>
            <Hidden smUp>
            <Cajon 
            variant ='temporary' 
            open = {abrir}
            onClose = { accionAbrir }
            />
            </Hidden>
            <div className={classes.content}>
                <Toolbar />
                <Cajita/>
            </div>
        </div>
    )
}

export default Contenedor