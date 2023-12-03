import { FC } from 'react'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NextLink from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/img/logo-petscare.svg'
import styles from './generalHeader.module.css';
import AppBar from '@mui/material/AppBar';


interface Props {
    handleDrawerToggle: () => void
}

const AppBarRegister: FC<Props> = ({ handleDrawerToggle }) => {

    return (
        <AppBar className={styles.appBar} >
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
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AppBarRegister