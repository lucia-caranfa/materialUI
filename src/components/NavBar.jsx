import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    /*appBar: {  [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${240}px)`,
      marginLeft: 240,}
    }
    
    menuButton tampoco funciona, el boton de la barra no desaparece, no toma los useStyles*/
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
            backgroundColor: 'red',
        },
    }
}
))

export default function NavBar(props) {

    const classes = useStyles()

    return (
        <>
            <AppBar sx={{
                width: { sm: `calc(100% - ${240}px)` },
                ml: { sm: `${240}px` },
            }}>    {/*No quiere tomar className={classes.appBar} del useStyles*/}
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={classes.menuButton}
                        onClick={()=>props.accionAbrir()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Nugget
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </>
    );
}