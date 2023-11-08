import { useState } from 'react'
import AppBarComponent from './AppBarGeneral';
import NavDrawer from './navDrawer';
import AppBarAuth from './AppBarAuth';


const navItems = ['inicio', 'servicios', 'turnos', 'profesionales', 'faqs'];

interface Props {
    variant?: "auth" | "general"
}

const GeneralHeader = ({ variant }: Props) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [auth, setAuth] = useState(true)

    return (
        <>
            {variant === 'general' ?
                <AppBarComponent navItems={navItems} handleDrawerToggle={handleDrawerToggle} auth={auth} />
                :
                <AppBarAuth handleDrawerToggle={handleDrawerToggle} />}

            <NavDrawer navItems={navItems} handleDrawerToggle={handleDrawerToggle} auth={auth} mobileOpen={mobileOpen} />
        </>
    )
}
GeneralHeader.defaultProps = {
    variant: 'general'
}

export default GeneralHeader