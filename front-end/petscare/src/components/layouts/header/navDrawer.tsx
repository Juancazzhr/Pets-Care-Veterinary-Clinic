import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['inicio', 'servicios', 'turnos', 'profesionales', 'faqs'];


const navDrawer = (props: Props) => {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
   

    return (
       <></>
    )
}

export default navDrawer


