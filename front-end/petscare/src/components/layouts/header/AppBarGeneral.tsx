import {FC} from 'react'
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

interface Props{
    handleDrawerToggle: ()=> void
    navItems: string []
    auth: boolean
}

const AppBarComponent: FC<Props> = ({handleDrawerToggle, navItems, auth}) => {
    return (
        <AppBar className={styles.appBar} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters className={styles.toolbar}>
                    <Link href="/" passHref >
                        <Image
                            src={logo}
                            alt='logo'
                            width={190.78}
                            height={60}
                            priority={true} 
                            className={styles.logo}/>
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
                                {auth ?
                                    <Stack direction="row">
                                        <PersonIcon color='secondary' sx={{ fontSize: '32px' }} />
                                        <Typography className={styles.user} >Lio Messi</Typography>
                                        <CancelIcon className={styles.cancelIcon} onClick={() => { }} />
                                    </Stack>
                                    :
                                    <Button variant="contained" color='secondary' className={styles.buttonLogin} href='/login'>iniciar sesión</Button>
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