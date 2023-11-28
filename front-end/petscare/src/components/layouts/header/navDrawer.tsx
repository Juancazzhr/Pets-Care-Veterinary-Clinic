import {FC, useContext} from 'react'
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
import AuthContext from '../../../context/AuthContext';

interface Props{
    window?: () => Window;
    mobileOpen: boolean
    handleDrawerToggle: ()=> void
    navItems: string []
}


const drawerWidth = 240;

const NavDrawer: FC<Props> = ({handleDrawerToggle, navItems, window, mobileOpen}) => {
    
    const { auth } = useContext(AuthContext);
    const container = window !== undefined ? () => window().document.body : undefined;

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
                            {auth && <>
                                <CancelIcon color='secondary' className={styles.cancelIcon} onClick={() => { }} />
                                <Box className={styles.drawerUserData}>
                                    <PersonIcon color='primary' className={styles.personIcon} />
                                    <Typography className={styles.user}>Pablo Jover</Typography>
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
                        <Button variant="outlined" className={styles.buttonLoginDrawer}>{auth ? 'cerrar sesión' : 'iniciar sesión'}</Button>
                    </Box>
                </Drawer>
            </nav>
    )
}

export default NavDrawer


