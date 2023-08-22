import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core';


/*const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    }
}
))*/

export default function NavBar() {

    //const classes = useStyles()

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