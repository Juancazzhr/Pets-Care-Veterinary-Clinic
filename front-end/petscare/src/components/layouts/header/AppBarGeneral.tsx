import {FC, useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/img/logo-petscare.svg'
import styles from './generalHeader.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/router';
import AuthContext from '../../../context/AuthContext';

interface Props{
    handleDrawerToggle: ()=> void
    navItems: string []
}

const AppBarComponent: FC<Props> = ({handleDrawerToggle, navItems}) => {

    const {userLog } = useContext(AuthContext);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const router = useRouter();
    return (
        <AppBar className={styles.appBar} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters className={styles.toolbar}>
                    <Link href="/" passHref >
                        <a><Image
                            src={logo}
                            alt='logo'
                            width={190.78}
                            height={60}
                            priority={true} 
                            className={styles.logo}/></a>
                    </Link>
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
                                    <Button key={item} className={styles.buttonNav} href={item === 'inicio' ? '/' : `/${item}`}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                            <Box className={styles.boxLogin}>
                                {isAuthenticated ?
                                    <Stack direction="row">
                                        <PersonIcon color='secondary' sx={{ fontSize: '32px' }} />
                                        <Typography className={styles.user} >{userLog?.firstName} {userLog?.lastName}</Typography>
                                        <CancelIcon className={styles.cancelIcon} onClick={() => {logout({ logoutParams : {returnTo : window.location.origin}}) }} />
                                    </Stack>
                                    :
                                    // <Button variant="contained" color='secondary' className={styles.buttonLogin} href='/login'>iniciar sesión</Button>
                                    <>
                                        <Button 
                                            variant="contained" 
                                            color='secondary' 
                                            className={styles.buttonLogin} 
                                            onClick={()=>
                                            {
                                                loginWithRedirect({
                                                    appState: { 
                                                        returnTo : "/client"
                                                    }
                                                })
                                            }}
                                        >iniciar sesión
                                        </Button>

                                        <Button 
                                            variant="contained" 
                                            color='secondary' 
                                            className={styles.buttonLogin} 
                                            onClick={()=>
                                            {
                                                loginWithRedirect({
                                                    appState: { 
                                                        returnTo : '/registro'
                                                    },
                                                    authorizationParams :{
                                                        screen_hint: "signup",
                                                    }
                                                })
                                            }}
                                        >Registrarse
                                        </Button>
                                    </>
                                }
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AppBarComponent