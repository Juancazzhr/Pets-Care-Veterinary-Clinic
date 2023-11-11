import { FC } from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NextLink from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/img/logo-petscare_secondary.svg'
import styles from './generalHeader.module.css';
import { useRouter } from 'next/router';

interface Props {
    handleDrawerToggle: () => void
}

const AppBarAuth: FC<Props> = ({ handleDrawerToggle }) => {

    const { asPath } = useRouter()

    return (
        <Stack className={styles.appBarAuth} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters className={styles.toolbar}>
                    <NextLink href="/" passHref>
                        <Image
                            src={logo}
                            alt='logo'
                            width={190.78}
                            height={60}
                            priority={true} 
                            className={styles.logo}/>
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
                            <Box className={styles.boxLogin}>
                                <Button variant="contained" color='secondary' className={styles.buttonLogin} href={asPath === '/registro' ? '/login' : '/registro'}>{asPath === '/registro' ? 'iniciar sesión' : 'registrate'}</Button>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </Stack>
    )
}

export default AppBarAuth