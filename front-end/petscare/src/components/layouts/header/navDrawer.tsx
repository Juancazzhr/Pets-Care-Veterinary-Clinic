import {FC, useContext, useState} from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import styles from './generalHeader.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import AuthContext from '../../../context/AuthContext';

interface Props{
    window?: () => Window;
    mobileOpen: boolean
    handleDrawerToggle: ()=> void
    navItems: string []
}


const drawerWidth = 240;

const NavDrawer: FC<Props> = ({handleDrawerToggle, navItems, window, mobileOpen}) => {
  
    const container = window !== undefined ? () => window().document.body : undefined;

    const {userLog} = useContext(AuthContext);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav>
                <Drawer
                    anchor={'right'}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: '10px' },
                    }}
                >
                    <Box onClick={handleDrawerToggle} >
                        <Stack className={styles.drawerUser}>
                            {isAuthenticated && <>
                                <CancelIcon color='secondary' className={styles.cancelIcon} onClick={() => { }} />
                                <Box className={styles.drawerUserData}>
                                    <PersonIcon color='primary' className={styles.personIcon} />
                                    <Typography className={styles.user}>{userLog?.firstName} {userLog?.lastName}</Typography>
                                    <Typography className={styles.text} >mi cuenta </Typography>
                                </Box></>}
                        </Stack>
                        <Divider color='#573469' variant="middle" />
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item} disablePadding sx={{ color: '#573469' }}>
                                    <ListItemButton href={item === 'inicio' ? '/' : `/${item}`}>
                                        <ListItemText primary={item}  />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        {
                            isAuthenticated ?
                            <Button variant="outlined" className={styles.buttonLoginDrawer} onClick={()=>{logout({ logoutParams : {returnTo : `${process.env.BASE_URL}`}})}}>cerrar sesión</Button>
                            :
                            <Box>
                            <Button variant="outlined" className={styles.buttonLoginDrawer} onClick={()=>{loginWithRedirect({appState: { returnTo : '/client'}})}}>iniciar sesión</Button>
                            <Button variant="outlined" className={styles.buttonRegDrawer} onClick={()=>{loginWithRedirect({appState: { returnTo : '/client'}})}}>registrarse</Button>
                            </Box>
                        }
                    </Box>
                </Drawer>
            </nav>
    )
}

export default NavDrawer



