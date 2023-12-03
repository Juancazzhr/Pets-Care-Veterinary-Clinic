import {useState } from 'react'
import AppBarComponent from './AppBarGeneral';
import NavDrawer from './navDrawer';
import AppBarAuth from './AppBarAuth';
import AppBarRegister from './AppBarRegister';



const navItems = ['inicio', 'turnos', 'profesionales', 'faqs'];

interface Props {
    variant?: "auth" | "general" | "register"
}

const GeneralHeader = ({ variant }: Props) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    return (
        <>
            {variant === 'general' &&
                <AppBarComponent navItems={navItems} handleDrawerToggle={handleDrawerToggle} />}

            {variant === 'auth' &&
                <AppBarAuth handleDrawerToggle={handleDrawerToggle} />}

            {variant === 'register' &&
                <AppBarRegister handleDrawerToggle={handleDrawerToggle} />}


            <NavDrawer navItems={navItems} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        </>
    )
}
GeneralHeader.defaultProps = {
    variant: 'general'
}

export default GeneralHeader