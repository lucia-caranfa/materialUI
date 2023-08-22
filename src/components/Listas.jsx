import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AgricultureIcon from '@mui/icons-material/Agriculture';

export default function Listas() {
    return (
        <>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <AdbIcon/>
                    </ListItemIcon>
                <ListItemText primary='Android'/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                <ListItemIcon>
                    <AirplanemodeActiveIcon/>
                    </ListItemIcon>
                <ListItemText primary='Avión'/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                <ListItemIcon>
                    <AgricultureIcon/>
                    </ListItemIcon>
                <ListItemText primary='Tractor'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
        </List>
        </>
    )
}