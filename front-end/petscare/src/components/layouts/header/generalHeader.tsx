import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CancelIcon from '@mui/icons-material/Cancel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import NextLink from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/img/logo-petscare.svg'
import styles from './generalHeader.module.css';


interface Props {
    window?: () => Window;
}
const drawerWidth = 250;
const navItems = ['INICIO', 'SERVICIOS', 'TURNOS', 'PROFESIONALES', 'FAQS'];


const GeneralHeader = (props: Props) => {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const [auth, setAuth] = useState(true)

    return (
        <>
            <AppBar className={styles.appBar} >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters className={styles.toolbar}>
                        <NextLink href="/" passHref>
                            <Image
                                src={logo}
                                alt='logo'
                                width={190.78}
                                height={60}
                                priority={true} />
                        </NextLink>
                        <Box>
                            <IconButton
                                color="secondary"
                                size='large'
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
                            >
                                <MenuIcon sx={{ fontSize: '32px' }} />
                            </IconButton>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Box>
                                    {navItems.map((item) => (
                                        <Button key={item} className={styles.buttonNav}>
                                            {item}
                                        </Button>
                                    ))}
                                </Box>
                                <Box className={styles.boxLogin}>
                                    {auth ?
                                        <Stack direction="row">
                                            <PersonIcon color='secondary' sx={{ fontSize: '32px' }} />
                                            <Typography className={styles.user} >Lio Messi</Typography>
                                            <CancelIcon className={styles.cancelIcon} onClick={() => { }} />
                                        </Stack>
                                        :
                                        <Button variant="contained" color='secondary' className={styles.buttonLogin}>iniciar sesión</Button>
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
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
                                    <Typography className={styles.user}>Lio Messi</Typography>
                                </Box></>}
                        </Stack>
                        <Divider color='#573469' variant="middle" />
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item} disablePadding sx={{ color: '#573469' }}>
                                    <ListItemButton>
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Button variant="outlined" className={styles.buttonLoginDrawer}>{auth ? 'cerrar sesión' : 'iniciar sesión'}</Button>
                    </Box>
                </Drawer>
            </nav>
        </>
    )
}

export default GeneralHeader